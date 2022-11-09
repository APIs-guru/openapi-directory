import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Return cinema details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{cinema_name}__: Used as a key word to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    CinemaDetailSearchRead(req: operations.CinemaDetailSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaDetailSearchReadResponse>;
    /**
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    CinemaScheduleSearchRead(req: operations.CinemaScheduleSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchReadResponse>;
    /**
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    CinemaScheduleSearchallRead(req: operations.CinemaScheduleSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchallReadResponse>;
    /**
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    CinemaSheduleShowtimeSearchRead(req: operations.CinemaSheduleShowtimeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchReadResponse>;
    /**
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name
     * * showtime starting date
     * * showtime ending date or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    CinemaSheduleShowtimeSearchallRead(req: operations.CinemaSheduleShowtimeSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchallReadResponse>;
    /**
     * Return cinema search result
     *
     * ### Response Class (Status 200)
     *
     * * __{id}__: Used as a key to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    CinemaSearchRead(req: operations.CinemaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSearchReadResponse>;
    /**
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search company credits for the movie
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    CompanyCreditsSearchRead(req: operations.CompanyCreditsSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchReadResponse>;
    /**
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * company name
     * * movie title or
     * * company credit description (such as production, cinematography, etc)
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/company_name
    **/
    CompanyCreditsSearchallRead(req: operations.CompanyCreditsSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchallReadResponse>;
    /**
     * Return company search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search companies,
     *
     * For more details on how companies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/-updated_date
    **/
    CompanySearchRead(req: operations.CompanySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchReadResponse>;
    /**
     * Return filmography type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{filmography_description}__: Used as a key word to search filmography types
     *
     * For more details on how filmography types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    FilmographyTypeSearchRead(req: operations.FilmographyTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographyTypeSearchReadResponse>;
    /**
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    FilmographySearchRead(req: operations.FilmographySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchReadResponse>;
    /**
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * filmography description (such as director, actor, producer, etc)
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    FilmographySearchallRead(req: operations.FilmographySearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchallReadResponse>;
    /**
     * Return genre type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{genre_description}__: Used as a key word to search genre types
     *
     * For more details on how genre types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    GenreTypeSearchRead(req: operations.GenreTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreTypeSearchReadResponse>;
    /**
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie genres
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    GenreSearchRead(req: operations.GenreSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchReadResponse>;
    /**
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_genre_type}__: Used as a key word to search movie genres
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    GenreSearchallRead(req: operations.GenreSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchallReadResponse>;
    /**
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{job_title}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    JobSearchRead(req: operations.JobSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchReadResponse>;
    /**
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    JobSearchallRead(req: operations.JobSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchallReadResponse>;
    /**
     * Return movie media search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search media for movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    MediaSearchRead(req: operations.MediaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchReadResponse>;
    /**
     * Return cast media search result
     *
     * ### Response Class (Status 200)
     * __{user}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     *
     * For more details on how cast media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/cast-list/-updated_date
    **/
    MediaSearchallRead(req: operations.MediaSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchallReadResponse>;
    /**
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    MovieCastSearchRead(req: operations.MovieCastSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchReadResponse>;
    /**
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * character name
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    MovieCastSearchallRead(req: operations.MovieCastSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchallReadResponse>;
    /**
     * Return movie search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    MovieSearchRead(req: operations.MovieSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieSearchReadResponse>;
    /**
     * Return news or article search result
     *
     * ### Response Class (Status 200)
     *
     * * __{title}__: Used as a key word to search news and articles,
     *
     * For more details on how news & articles are listed [see here][ref].
     * [ref]: https://etmdb.com/en/news-list/-updated_date
    **/
    NewsSearchRead(req: operations.NewsSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.NewsSearchReadResponse>;
    /**
     * Return cast search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     *
     * For more details on how cast are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cast-list/-updated_date
    **/
    PeopleSearchRead(req: operations.PeopleSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.PeopleSearchReadResponse>;
    /**
     * Return showtime search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * show time or
     * * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
     *
     * For more details about showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    ShowtimeSearchallRead(req: operations.ShowtimeSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.ShowtimeSearchallReadResponse>;
    /**
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies on watchlist
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    WatchlistSearchRead(req: operations.WatchlistSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchReadResponse>;
    /**
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    WatchlistSearchallRead(req: operations.WatchlistSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchallReadResponse>;
}
export {};
