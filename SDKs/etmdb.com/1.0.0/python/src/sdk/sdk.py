

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://etmdb.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def cinema_detail_search_read(self, request: operations.CinemaDetailSearchReadRequest) -> operations.CinemaDetailSearchReadResponse:
        r"""Return cinema details search result
        Return cinema details search result
        
        ### Response Class (Status 200)
        
        * __{cinema_name}__: Used as a key word to search cinemas,
        
        For more details on how cinemas are listed [see here][ref].
        [ref]: https://etmdb.com/en/cinema-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-detail/search/{cinema_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaDetailSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_schedule_search_read(self, request: operations.CinemaScheduleSearchReadRequest) -> operations.CinemaScheduleSearchReadResponse:
        r"""Return cinema schedule search result
        Return cinema schedule search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movie cast
        * You can use both Amharic or English charset/font to search
        
        For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-schedule/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaScheduleSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_schedule_searchall_read(self, request: operations.CinemaScheduleSearchallReadRequest) -> operations.CinemaScheduleSearchallReadResponse:
        r"""Return cinema schedule search result
        Return cinema schedule search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * movie title
        * cinema name
        * cinema hall name or
        * cinema technology
        
        For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-schedule/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaScheduleSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_shedule_showtime_search_read(self, request: operations.CinemaSheduleShowtimeSearchReadRequest) -> operations.CinemaSheduleShowtimeSearchReadResponse:
        r"""Return cinema schedule and showtime search result
        Return cinema schedule and showtime search result
        
        ### Response Class (Status 200)
        * __{movie_title}__: Used as a key word to search movie cast
        * You can use both Amharic or English charset/font to search
        
        For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_shedule_showtime_searchall_read(self, request: operations.CinemaSheduleShowtimeSearchallReadRequest) -> operations.CinemaSheduleShowtimeSearchallReadResponse:
        r"""Return cinema schedule and showtime search result
        Return cinema schedule and showtime search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * movie title
        * cinema name
        * cinema hall name
        * showtime starting date
        * showtime ending date or
        * cinema technology
        
        For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_search_read(self, request: operations.CinemaSearchReadRequest) -> operations.CinemaSearchReadResponse:
        r"""Return cinema search result
        Return cinema search result
        
        ### Response Class (Status 200)
        
        * __{id}__: Used as a key to search cinemas,
        
        For more details on how cinemas are listed [see here][ref].
        [ref]: https://etmdb.com/en/cinema-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema/search/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def company_credits_search_read(self, request: operations.CompanyCreditsSearchReadRequest) -> operations.CompanyCreditsSearchReadResponse:
        r"""Return company credits search result
        Return company credits search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search company credits for the movie
        * You can use both Amharic or English charset/font to search
        
        For more details on how company credits are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company-credits/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def company_credits_searchall_read(self, request: operations.CompanyCreditsSearchallReadRequest) -> operations.CompanyCreditsSearchallReadResponse:
        r"""Return company credits search result
        Return company credits search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * company name
        * movie title or
        * company credit description (such as production, cinematography, etc)
        
        For more details on how company credits are listed [see here][ref].
        [ref]: https://etmdb.com/en/company-list/company_name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company-credits/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def company_search_read(self, request: operations.CompanySearchReadRequest) -> operations.CompanySearchReadResponse:
        r"""Return company search result
        Return company search result
        
        ### Response Class (Status 200)
        
        * __{company_name}__: Used as a key word to search companies,
        
        For more details on how companies are listed [see here][ref].
        [ref]: https://etmdb.com/en/company-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/search/{company_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def filmography_type_search_read(self, request: operations.FilmographyTypeSearchReadRequest) -> operations.FilmographyTypeSearchReadResponse:
        r"""Return filmography type search result
        Return filmography type search result
        
        ### Response Class (Status 200)
        
        * __{filmography_description}__: Used as a key word to search filmography types
        
        For more details on how filmography types are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/filmography-type/search/{filmography_description}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographyTypeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def filmography_search_read(self, request: operations.FilmographySearchReadRequest) -> operations.FilmographySearchReadResponse:
        r"""Return filmography search result
        Return filmography search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movies
        * You can use both Amharic or English charset/font to search
        
        For more details on how filmographies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/filmography/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographySearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def filmography_searchall_read(self, request: operations.FilmographySearchallReadRequest) -> operations.FilmographySearchallReadResponse:
        r"""Return filmography search result
        Return filmography search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        * movie title or
        * filmography description (such as director, actor, producer, etc)
        
        For more details on how filmographies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/filmography/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographySearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def genre_type_search_read(self, request: operations.GenreTypeSearchReadRequest) -> operations.GenreTypeSearchReadResponse:
        r"""Return genre type search result
        Return genre type search result
        
        ### Response Class (Status 200)
        
        * __{genre_description}__: Used as a key word to search genre types
        
        For more details on how genre types are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/genre-type/search/{genre_description}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreTypeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def genre_search_read(self, request: operations.GenreSearchReadRequest) -> operations.GenreSearchReadResponse:
        r"""Return movie genre search result
        Return movie genre search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movie genres
        * You can use both Amharic or English charset/font to search
        
        For more details on how movies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/genre/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def genre_searchall_read(self, request: operations.GenreSearchallReadRequest) -> operations.GenreSearchallReadResponse:
        r"""Return movie genre search result
        Return movie genre search result
        
        ### Response Class (Status 200)
        
        * __{movie_genre_type}__: Used as a key word to search movie genres
        
        For more details on how movies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/genre/searchall/{movie_genre_type}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def job_search_read(self, request: operations.JobSearchReadRequest) -> operations.JobSearchReadResponse:
        r"""Return job details search result
        Return job details search result
        
        ### Response Class (Status 200)
        
        * __{job_title}__: Used as a key word to search jobs,
        
        For more details on how job are listed [see here][ref].
        [ref]: https://etmdb.com/en/job-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/job/search/{job_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def job_searchall_read(self, request: operations.JobSearchallReadRequest) -> operations.JobSearchallReadResponse:
        r"""Return job details search result
        Return job details search result
        
        ### Response Class (Status 200)
        
        * __{company_name}__: Used as a key word to search jobs,
        
        For more details on how job are listed [see here][ref].
        [ref]: https://etmdb.com/en/job-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/job/searchall/{company_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def media_search_read(self, request: operations.MediaSearchReadRequest) -> operations.MediaSearchReadResponse:
        r"""Return movie media search result
        Return movie media search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search media for movies
        * You can use both Amharic or English charset/font to search
        
        For more details on how media is listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/media/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MediaSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def media_searchall_read(self, request: operations.MediaSearchallReadRequest) -> operations.MediaSearchallReadResponse:
        r"""Return cast media search result
        Return cast media search result
        
        ### Response Class (Status 200)
        __{user}__ argument can be
        * artist first name
        * artist last name
        * artist username
        
        For more details on how cast media is listed [see here][ref].
        [ref]: https://etmdb.com/en/cast-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/media/searchall/{user}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MediaSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def movie_cast_search_read(self, request: operations.MovieCastSearchReadRequest) -> operations.MovieCastSearchReadResponse:
        r"""Return movie cast search result
        Return movie cast search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movie cast
        * You can use both Amharic or English charset/font to search
        
        For more details on how movie casts are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/movie-cast/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieCastSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def movie_cast_searchall_read(self, request: operations.MovieCastSearchallReadRequest) -> operations.MovieCastSearchallReadResponse:
        r"""Return movie cast search result
        Return movie cast search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        * movie title or
        * character name
        
        For more details on how movie casts are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/movie-cast/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieCastSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def movie_search_read(self, request: operations.MovieSearchReadRequest) -> operations.MovieSearchReadResponse:
        r"""Return movie search result
        Return movie search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movies
        * You can use both Amharic or English charset/font to search
        
        For more details on how movies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/movie/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def news_search_read(self, request: operations.NewsSearchReadRequest) -> operations.NewsSearchReadResponse:
        r"""Return news or article search result
        Return news or article search result
        
        ### Response Class (Status 200)
        
        * __{title}__: Used as a key word to search news and articles,
        
        For more details on how news & articles are listed [see here][ref].
        [ref]: https://etmdb.com/en/news-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/news/search/{title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def people_search_read(self, request: operations.PeopleSearchReadRequest) -> operations.PeopleSearchReadResponse:
        r"""Return cast search result
        Return cast search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        
        For more details on how cast are listed [see here][ref].
        [ref]: https://etmdb.com/en/cast-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/people/search/{user}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def showtime_searchall_read(self, request: operations.ShowtimeSearchallReadRequest) -> operations.ShowtimeSearchallReadResponse:
        r"""Return showtime search result
        Return showtime search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * show time or
        * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
        
        For more details about showtime, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/showtime/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def watchlist_search_read(self, request: operations.WatchlistSearchReadRequest) -> operations.WatchlistSearchReadResponse:
        r"""Return watchlist search result
        Return watchlist search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movies on watchlist
        * You can use both Amharic or English charset/font to search
        
        For more details on how watchlist are listed [see here][ref].
        [ref]: https://etmdb.com/en/movies/watchlist/id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/watchlist/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def watchlist_searchall_read(self, request: operations.WatchlistSearchallReadRequest) -> operations.WatchlistSearchallReadResponse:
        r"""Return watchlist search result
        Return watchlist search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        * movie title or
        
        For more details on how watchlist are listed [see here][ref].
        [ref]: https://etmdb.com/en/movies/watchlist/id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/watchlist/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    