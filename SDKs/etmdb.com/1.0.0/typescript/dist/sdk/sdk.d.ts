import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://etmdb.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cinemaDetailSearchRead - Return cinema details search result
     *
     * Return cinema details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{cinema_name}__: Used as a key word to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    cinemaDetailSearchRead(req: operations.CinemaDetailSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaDetailSearchReadResponse>;
    /**
     * cinemaScheduleSearchRead - Return cinema schedule search result
     *
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
    cinemaScheduleSearchRead(req: operations.CinemaScheduleSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchReadResponse>;
    /**
     * cinemaScheduleSearchallRead - Return cinema schedule search result
     *
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
    cinemaScheduleSearchallRead(req: operations.CinemaScheduleSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaScheduleSearchallReadResponse>;
    /**
     * cinemaSheduleShowtimeSearchRead - Return cinema schedule and showtime search result
     *
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    cinemaSheduleShowtimeSearchRead(req: operations.CinemaSheduleShowtimeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchReadResponse>;
    /**
     * cinemaSheduleShowtimeSearchallRead - Return cinema schedule and showtime search result
     *
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
    cinemaSheduleShowtimeSearchallRead(req: operations.CinemaSheduleShowtimeSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSheduleShowtimeSearchallReadResponse>;
    /**
     * cinemaSearchRead - Return cinema search result
     *
     * Return cinema search result
     *
     * ### Response Class (Status 200)
     *
     * * __{id}__: Used as a key to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    cinemaSearchRead(req: operations.CinemaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CinemaSearchReadResponse>;
    /**
     * companyCreditsSearchRead - Return company credits search result
     *
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
    companyCreditsSearchRead(req: operations.CompanyCreditsSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchReadResponse>;
    /**
     * companyCreditsSearchallRead - Return company credits search result
     *
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
    companyCreditsSearchallRead(req: operations.CompanyCreditsSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanyCreditsSearchallReadResponse>;
    /**
     * companySearchRead - Return company search result
     *
     * Return company search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search companies,
     *
     * For more details on how companies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/-updated_date
    **/
    companySearchRead(req: operations.CompanySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.CompanySearchReadResponse>;
    /**
     * filmographyTypeSearchRead - Return filmography type search result
     *
     * Return filmography type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{filmography_description}__: Used as a key word to search filmography types
     *
     * For more details on how filmography types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    filmographyTypeSearchRead(req: operations.FilmographyTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographyTypeSearchReadResponse>;
    /**
     * filmographySearchRead - Return filmography search result
     *
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
    filmographySearchRead(req: operations.FilmographySearchReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchReadResponse>;
    /**
     * filmographySearchallRead - Return filmography search result
     *
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
    filmographySearchallRead(req: operations.FilmographySearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.FilmographySearchallReadResponse>;
    /**
     * genreTypeSearchRead - Return genre type search result
     *
     * Return genre type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{genre_description}__: Used as a key word to search genre types
     *
     * For more details on how genre types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    genreTypeSearchRead(req: operations.GenreTypeSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreTypeSearchReadResponse>;
    /**
     * genreSearchRead - Return movie genre search result
     *
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
    genreSearchRead(req: operations.GenreSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchReadResponse>;
    /**
     * genreSearchallRead - Return movie genre search result
     *
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_genre_type}__: Used as a key word to search movie genres
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    genreSearchallRead(req: operations.GenreSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.GenreSearchallReadResponse>;
    /**
     * jobSearchRead - Return job details search result
     *
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{job_title}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    jobSearchRead(req: operations.JobSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchReadResponse>;
    /**
     * jobSearchallRead - Return job details search result
     *
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    jobSearchallRead(req: operations.JobSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchallReadResponse>;
    /**
     * mediaSearchRead - Return movie media search result
     *
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
    mediaSearchRead(req: operations.MediaSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchReadResponse>;
    /**
     * mediaSearchallRead - Return cast media search result
     *
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
    mediaSearchallRead(req: operations.MediaSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MediaSearchallReadResponse>;
    /**
     * movieCastSearchRead - Return movie cast search result
     *
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
    movieCastSearchRead(req: operations.MovieCastSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchReadResponse>;
    /**
     * movieCastSearchallRead - Return movie cast search result
     *
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
    movieCastSearchallRead(req: operations.MovieCastSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieCastSearchallReadResponse>;
    /**
     * movieSearchRead - Return movie search result
     *
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
    movieSearchRead(req: operations.MovieSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.MovieSearchReadResponse>;
    /**
     * newsSearchRead - Return news or article search result
     *
     * Return news or article search result
     *
     * ### Response Class (Status 200)
     *
     * * __{title}__: Used as a key word to search news and articles,
     *
     * For more details on how news & articles are listed [see here][ref].
     * [ref]: https://etmdb.com/en/news-list/-updated_date
    **/
    newsSearchRead(req: operations.NewsSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.NewsSearchReadResponse>;
    /**
     * peopleSearchRead - Return cast search result
     *
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
    peopleSearchRead(req: operations.PeopleSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.PeopleSearchReadResponse>;
    /**
     * showtimeSearchallRead - Return showtime search result
     *
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
    showtimeSearchallRead(req: operations.ShowtimeSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.ShowtimeSearchallReadResponse>;
    /**
     * watchlistSearchRead - Return watchlist search result
     *
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
    watchlistSearchRead(req: operations.WatchlistSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchReadResponse>;
    /**
     * watchlistSearchallRead - Return watchlist search result
     *
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
    watchlistSearchallRead(req: operations.WatchlistSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.WatchlistSearchallReadResponse>;
}
export {};
