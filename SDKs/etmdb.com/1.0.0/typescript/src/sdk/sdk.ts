import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://etmdb.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
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
  cinemaDetailSearchRead(
    req: operations.CinemaDetailSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaDetailSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaDetailSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-detail/search/{cinema_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaDetailSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  cinemaScheduleSearchRead(
    req: operations.CinemaScheduleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaScheduleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  cinemaScheduleSearchallRead(
    req: operations.CinemaScheduleSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaScheduleSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  cinemaSheduleShowtimeSearchRead(
    req: operations.CinemaSheduleShowtimeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSheduleShowtimeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSheduleShowtimeSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaSheduleShowtimeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  cinemaSheduleShowtimeSearchallRead(
    req: operations.CinemaSheduleShowtimeSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSheduleShowtimeSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSheduleShowtimeSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaSheduleShowtimeSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  cinemaSearchRead(
    req: operations.CinemaSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema/search/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  companyCreditsSearchRead(
    req: operations.CompanyCreditsSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyCreditsSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyCreditsSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company-credits/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyCreditsSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  companyCreditsSearchallRead(
    req: operations.CompanyCreditsSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyCreditsSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyCreditsSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company-credits/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyCreditsSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  companySearchRead(
    req: operations.CompanySearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanySearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanySearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company/search/{company_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanySearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  filmographyTypeSearchRead(
    req: operations.FilmographyTypeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographyTypeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographyTypeSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography-type/search/{filmography_description}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilmographyTypeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  filmographySearchRead(
    req: operations.FilmographySearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilmographySearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  filmographySearchallRead(
    req: operations.FilmographySearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilmographySearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  genreTypeSearchRead(
    req: operations.GenreTypeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreTypeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreTypeSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre-type/search/{genre_description}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenreTypeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  genreSearchRead(
    req: operations.GenreSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenreSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  genreSearchallRead(
    req: operations.GenreSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre/searchall/{movie_genre_type}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenreSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  jobSearchRead(
    req: operations.JobSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/job/search/{job_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.JobSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  jobSearchallRead(
    req: operations.JobSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/job/searchall/{company_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.JobSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  mediaSearchRead(
    req: operations.MediaSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/media/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MediaSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  mediaSearchallRead(
    req: operations.MediaSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/media/searchall/{user}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MediaSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  movieCastSearchRead(
    req: operations.MovieCastSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie-cast/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MovieCastSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  movieCastSearchallRead(
    req: operations.MovieCastSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie-cast/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MovieCastSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  movieSearchRead(
    req: operations.MovieSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MovieSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  newsSearchRead(
    req: operations.NewsSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/news/search/{title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  peopleSearchRead(
    req: operations.PeopleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PeopleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PeopleSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/people/search/{user}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PeopleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  showtimeSearchallRead(
    req: operations.ShowtimeSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowtimeSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowtimeSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/showtime/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ShowtimeSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  watchlistSearchRead(
    req: operations.WatchlistSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WatchlistSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WatchlistSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/watchlist/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WatchlistSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  watchlistSearchallRead(
    req: operations.WatchlistSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WatchlistSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WatchlistSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/watchlist/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WatchlistSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
