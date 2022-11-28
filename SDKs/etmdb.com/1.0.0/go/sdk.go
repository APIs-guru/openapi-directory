package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

var ServerList = []string{
	"https://etmdb.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// CinemaDetailSearchRead - Return cinema details search result
// Return cinema details search result
//
// ### Response Class (Status 200)
//
// * __{cinema_name}__: Used as a key word to search cinemas,
//
// For more details on how cinemas are listed [see here][ref].
// [ref]: https://etmdb.com/en/cinema-list/-updated_date
func (s *SDK) CinemaDetailSearchRead(ctx context.Context, request operations.CinemaDetailSearchReadRequest) (*operations.CinemaDetailSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-detail/search/{cinema_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaDetailSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaScheduleSearchRead - Return cinema schedule search result
// Return cinema schedule search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) CinemaScheduleSearchRead(ctx context.Context, request operations.CinemaScheduleSearchReadRequest) (*operations.CinemaScheduleSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-schedule/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaScheduleSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaScheduleSearchallRead - Return cinema schedule search result
// Return cinema schedule search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * movie title
// * cinema name
// * cinema hall name or
// * cinema technology
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) CinemaScheduleSearchallRead(ctx context.Context, request operations.CinemaScheduleSearchallReadRequest) (*operations.CinemaScheduleSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-schedule/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaScheduleSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaSheduleShowtimeSearchRead - Return cinema schedule and showtime search result
// Return cinema schedule and showtime search result
//
// ### Response Class (Status 200)
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) CinemaSheduleShowtimeSearchRead(ctx context.Context, request operations.CinemaSheduleShowtimeSearchReadRequest) (*operations.CinemaSheduleShowtimeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-shedule-showtime/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaSheduleShowtimeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaSheduleShowtimeSearchallRead - Return cinema schedule and showtime search result
// Return cinema schedule and showtime search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * movie title
// * cinema name
// * cinema hall name
// * showtime starting date
// * showtime ending date or
// * cinema technology
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) CinemaSheduleShowtimeSearchallRead(ctx context.Context, request operations.CinemaSheduleShowtimeSearchallReadRequest) (*operations.CinemaSheduleShowtimeSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-shedule-showtime/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaSheduleShowtimeSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaSearchRead - Return cinema search result
// Return cinema search result
//
// ### Response Class (Status 200)
//
// * __{id}__: Used as a key to search cinemas,
//
// For more details on how cinemas are listed [see here][ref].
// [ref]: https://etmdb.com/en/cinema-list/-updated_date
func (s *SDK) CinemaSearchRead(ctx context.Context, request operations.CinemaSearchReadRequest) (*operations.CinemaSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema/search/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CinemaSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CompanyCreditsSearchRead - Return company credits search result
// Return company credits search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search company credits for the movie
// * You can use both Amharic or English charset/font to search
//
// For more details on how company credits are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) CompanyCreditsSearchRead(ctx context.Context, request operations.CompanyCreditsSearchReadRequest) (*operations.CompanyCreditsSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/company-credits/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompanyCreditsSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CompanyCreditsSearchallRead - Return company credits search result
// Return company credits search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * company name
// * movie title or
// * company credit description (such as production, cinematography, etc)
//
// For more details on how company credits are listed [see here][ref].
// [ref]: https://etmdb.com/en/company-list/company_name
func (s *SDK) CompanyCreditsSearchallRead(ctx context.Context, request operations.CompanyCreditsSearchallReadRequest) (*operations.CompanyCreditsSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/company-credits/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompanyCreditsSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CompanySearchRead - Return company search result
// Return company search result
//
// ### Response Class (Status 200)
//
// * __{company_name}__: Used as a key word to search companies,
//
// For more details on how companies are listed [see here][ref].
// [ref]: https://etmdb.com/en/company-list/-updated_date
func (s *SDK) CompanySearchRead(ctx context.Context, request operations.CompanySearchReadRequest) (*operations.CompanySearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/company/search/{company_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompanySearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// FilmographyTypeSearchRead - Return filmography type search result
// Return filmography type search result
//
// ### Response Class (Status 200)
//
// * __{filmography_description}__: Used as a key word to search filmography types
//
// For more details on how filmography types are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) FilmographyTypeSearchRead(ctx context.Context, request operations.FilmographyTypeSearchReadRequest) (*operations.FilmographyTypeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography-type/search/{filmography_description}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FilmographyTypeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// FilmographySearchRead - Return filmography search result
// Return filmography search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how filmographies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) FilmographySearchRead(ctx context.Context, request operations.FilmographySearchReadRequest) (*operations.FilmographySearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FilmographySearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// FilmographySearchallRead - Return filmography search result
// Return filmography search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
// * filmography description (such as director, actor, producer, etc)
//
// For more details on how filmographies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) FilmographySearchallRead(ctx context.Context, request operations.FilmographySearchallReadRequest) (*operations.FilmographySearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FilmographySearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GenreTypeSearchRead - Return genre type search result
// Return genre type search result
//
// ### Response Class (Status 200)
//
// * __{genre_description}__: Used as a key word to search genre types
//
// For more details on how genre types are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) GenreTypeSearchRead(ctx context.Context, request operations.GenreTypeSearchReadRequest) (*operations.GenreTypeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/genre-type/search/{genre_description}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GenreTypeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GenreSearchRead - Return movie genre search result
// Return movie genre search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movie genres
// * You can use both Amharic or English charset/font to search
//
// For more details on how movies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) GenreSearchRead(ctx context.Context, request operations.GenreSearchReadRequest) (*operations.GenreSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/genre/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GenreSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GenreSearchallRead - Return movie genre search result
// Return movie genre search result
//
// ### Response Class (Status 200)
//
// * __{movie_genre_type}__: Used as a key word to search movie genres
//
// For more details on how movies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) GenreSearchallRead(ctx context.Context, request operations.GenreSearchallReadRequest) (*operations.GenreSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/genre/searchall/{movie_genre_type}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GenreSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// JobSearchRead - Return job details search result
// Return job details search result
//
// ### Response Class (Status 200)
//
// * __{job_title}__: Used as a key word to search jobs,
//
// For more details on how job are listed [see here][ref].
// [ref]: https://etmdb.com/en/job-list/-updated_date
func (s *SDK) JobSearchRead(ctx context.Context, request operations.JobSearchReadRequest) (*operations.JobSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/job/search/{job_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.JobSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// JobSearchallRead - Return job details search result
// Return job details search result
//
// ### Response Class (Status 200)
//
// * __{company_name}__: Used as a key word to search jobs,
//
// For more details on how job are listed [see here][ref].
// [ref]: https://etmdb.com/en/job-list/-updated_date
func (s *SDK) JobSearchallRead(ctx context.Context, request operations.JobSearchallReadRequest) (*operations.JobSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/job/searchall/{company_name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.JobSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MediaSearchRead - Return movie media search result
// Return movie media search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search media for movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how media is listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) MediaSearchRead(ctx context.Context, request operations.MediaSearchReadRequest) (*operations.MediaSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/media/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MediaSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MediaSearchallRead - Return cast media search result
// Return cast media search result
//
// ### Response Class (Status 200)
// __{user}__ argument can be
// * artist first name
// * artist last name
// * artist username
//
// For more details on how cast media is listed [see here][ref].
// [ref]: https://etmdb.com/en/cast-list/-updated_date
func (s *SDK) MediaSearchallRead(ctx context.Context, request operations.MediaSearchallReadRequest) (*operations.MediaSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/media/searchall/{user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MediaSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MovieCastSearchRead - Return movie cast search result
// Return movie cast search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details on how movie casts are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) MovieCastSearchRead(ctx context.Context, request operations.MovieCastSearchReadRequest) (*operations.MovieCastSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie-cast/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MovieCastSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MovieCastSearchallRead - Return movie cast search result
// Return movie cast search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
// * character name
//
// For more details on how movie casts are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) MovieCastSearchallRead(ctx context.Context, request operations.MovieCastSearchallReadRequest) (*operations.MovieCastSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie-cast/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MovieCastSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MovieSearchRead - Return movie search result
// Return movie search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how movies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) MovieSearchRead(ctx context.Context, request operations.MovieSearchReadRequest) (*operations.MovieSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MovieSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NewsSearchRead - Return news or article search result
// Return news or article search result
//
// ### Response Class (Status 200)
//
// * __{title}__: Used as a key word to search news and articles,
//
// For more details on how news & articles are listed [see here][ref].
// [ref]: https://etmdb.com/en/news-list/-updated_date
func (s *SDK) NewsSearchRead(ctx context.Context, request operations.NewsSearchReadRequest) (*operations.NewsSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/news/search/{title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NewsSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PeopleSearchRead - Return cast search result
// Return cast search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
//
// For more details on how cast are listed [see here][ref].
// [ref]: https://etmdb.com/en/cast-list/-updated_date
func (s *SDK) PeopleSearchRead(ctx context.Context, request operations.PeopleSearchReadRequest) (*operations.PeopleSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/people/search/{user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PeopleSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// ShowtimeSearchallRead - Return showtime search result
// Return showtime search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * show time or
// * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
//
// For more details about showtime, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *SDK) ShowtimeSearchallRead(ctx context.Context, request operations.ShowtimeSearchallReadRequest) (*operations.ShowtimeSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/showtime/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ShowtimeSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WatchlistSearchRead - Return watchlist search result
// Return watchlist search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies on watchlist
// * You can use both Amharic or English charset/font to search
//
// For more details on how watchlist are listed [see here][ref].
// [ref]: https://etmdb.com/en/movies/watchlist/id
func (s *SDK) WatchlistSearchRead(ctx context.Context, request operations.WatchlistSearchReadRequest) (*operations.WatchlistSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/watchlist/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WatchlistSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WatchlistSearchallRead - Return watchlist search result
// Return watchlist search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
//
// For more details on how watchlist are listed [see here][ref].
// [ref]: https://etmdb.com/en/movies/watchlist/id
func (s *SDK) WatchlistSearchallRead(ctx context.Context, request operations.WatchlistSearchallReadRequest) (*operations.WatchlistSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/watchlist/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WatchlistSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
