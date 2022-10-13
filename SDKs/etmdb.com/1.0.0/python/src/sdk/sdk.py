import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://etmdb.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def cinema_detail_search_read(self, request: operations.CinemaDetailSearchReadRequest) -> operations.CinemaDetailSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema-detail/search/{cinema_name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaDetailSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def cinema_schedule_search_read(self, request: operations.CinemaScheduleSearchReadRequest) -> operations.CinemaScheduleSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema-schedule/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaScheduleSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def cinema_schedule_searchall_read(self, request: operations.CinemaScheduleSearchallReadRequest) -> operations.CinemaScheduleSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema-schedule/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaScheduleSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def cinema_shedule_showtime_search_read(self, request: operations.CinemaSheduleShowtimeSearchReadRequest) -> operations.CinemaSheduleShowtimeSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def cinema_shedule_showtime_searchall_read(self, request: operations.CinemaSheduleShowtimeSearchallReadRequest) -> operations.CinemaSheduleShowtimeSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def cinema_search_read(self, request: operations.CinemaSearchReadRequest) -> operations.CinemaSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/cinema/search/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def company_credits_search_read(self, request: operations.CompanyCreditsSearchReadRequest) -> operations.CompanyCreditsSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/company-credits/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def company_credits_searchall_read(self, request: operations.CompanyCreditsSearchallReadRequest) -> operations.CompanyCreditsSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/company-credits/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def company_search_read(self, request: operations.CompanySearchReadRequest) -> operations.CompanySearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/company/search/{company_name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def filmography_type_search_read(self, request: operations.FilmographyTypeSearchReadRequest) -> operations.FilmographyTypeSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/filmography-type/search/{filmography_description}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographyTypeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def filmography_search_read(self, request: operations.FilmographySearchReadRequest) -> operations.FilmographySearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/filmography/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographySearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def filmography_searchall_read(self, request: operations.FilmographySearchallReadRequest) -> operations.FilmographySearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/filmography/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilmographySearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def genre_type_search_read(self, request: operations.GenreTypeSearchReadRequest) -> operations.GenreTypeSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/genre-type/search/{genre_description}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreTypeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def genre_search_read(self, request: operations.GenreSearchReadRequest) -> operations.GenreSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/genre/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def genre_searchall_read(self, request: operations.GenreSearchallReadRequest) -> operations.GenreSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/genre/searchall/{movie_genre_type}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenreSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def job_search_read(self, request: operations.JobSearchReadRequest) -> operations.JobSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/job/search/{job_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def job_searchall_read(self, request: operations.JobSearchallReadRequest) -> operations.JobSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/job/searchall/{company_name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def media_search_read(self, request: operations.MediaSearchReadRequest) -> operations.MediaSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/media/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MediaSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def media_searchall_read(self, request: operations.MediaSearchallReadRequest) -> operations.MediaSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/media/searchall/{user}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MediaSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def movie_cast_search_read(self, request: operations.MovieCastSearchReadRequest) -> operations.MovieCastSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/movie-cast/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieCastSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def movie_cast_searchall_read(self, request: operations.MovieCastSearchallReadRequest) -> operations.MovieCastSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/movie-cast/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieCastSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def movie_search_read(self, request: operations.MovieSearchReadRequest) -> operations.MovieSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/movie/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def news_search_read(self, request: operations.NewsSearchReadRequest) -> operations.NewsSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/news/search/{title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def people_search_read(self, request: operations.PeopleSearchReadRequest) -> operations.PeopleSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/people/search/{user}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def showtime_searchall_read(self, request: operations.ShowtimeSearchallReadRequest) -> operations.ShowtimeSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/showtime/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def watchlist_search_read(self, request: operations.WatchlistSearchReadRequest) -> operations.WatchlistSearchReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/watchlist/search/{movie_title}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def watchlist_searchall_read(self, request: operations.WatchlistSearchallReadRequest) -> operations.WatchlistSearchallReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/watchlist/searchall/{param}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    