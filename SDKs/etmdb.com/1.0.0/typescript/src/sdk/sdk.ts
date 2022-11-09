import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CinemaDetailSearchRead - Return cinema details search result
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
  CinemaDetailSearchRead(
    req: operations.CinemaDetailSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaDetailSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaDetailSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-detail/search/{cinema_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaDetailSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CinemaScheduleSearchRead - Return cinema schedule search result
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
  CinemaScheduleSearchRead(
    req: operations.CinemaScheduleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaScheduleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CinemaScheduleSearchallRead - Return cinema schedule search result
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
  CinemaScheduleSearchallRead(
    req: operations.CinemaScheduleSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaScheduleSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CinemaSheduleShowtimeSearchRead - Return cinema schedule and showtime search result
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
  CinemaSheduleShowtimeSearchRead(
    req: operations.CinemaSheduleShowtimeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSheduleShowtimeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSheduleShowtimeSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaSheduleShowtimeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CinemaSheduleShowtimeSearchallRead - Return cinema schedule and showtime search result
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
  CinemaSheduleShowtimeSearchallRead(
    req: operations.CinemaSheduleShowtimeSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSheduleShowtimeSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSheduleShowtimeSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaSheduleShowtimeSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CinemaSearchRead - Return cinema search result
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
  CinemaSearchRead(
    req: operations.CinemaSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/cinema/search/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CinemaSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CompanyCreditsSearchRead - Return company credits search result
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
  CompanyCreditsSearchRead(
    req: operations.CompanyCreditsSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyCreditsSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyCreditsSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company-credits/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CompanyCreditsSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CompanyCreditsSearchallRead - Return company credits search result
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
  CompanyCreditsSearchallRead(
    req: operations.CompanyCreditsSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyCreditsSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyCreditsSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company-credits/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CompanyCreditsSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CompanySearchRead - Return company search result
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
  CompanySearchRead(
    req: operations.CompanySearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanySearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanySearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/company/search/{company_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CompanySearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilmographyTypeSearchRead - Return filmography type search result
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
  FilmographyTypeSearchRead(
    req: operations.FilmographyTypeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographyTypeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographyTypeSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography-type/search/{filmography_description}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilmographyTypeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilmographySearchRead - Return filmography search result
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
  FilmographySearchRead(
    req: operations.FilmographySearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilmographySearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilmographySearchallRead - Return filmography search result
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
  FilmographySearchallRead(
    req: operations.FilmographySearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/filmography/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilmographySearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenreTypeSearchRead - Return genre type search result
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
  GenreTypeSearchRead(
    req: operations.GenreTypeSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreTypeSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreTypeSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre-type/search/{genre_description}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenreTypeSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenreSearchRead - Return movie genre search result
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
  GenreSearchRead(
    req: operations.GenreSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenreSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenreSearchallRead - Return movie genre search result
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
  GenreSearchallRead(
    req: operations.GenreSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenreSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenreSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/genre/searchall/{movie_genre_type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenreSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobSearchRead - Return job details search result
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
  JobSearchRead(
    req: operations.JobSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/job/search/{job_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.JobSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobSearchallRead - Return job details search result
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
  JobSearchallRead(
    req: operations.JobSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/job/searchall/{company_name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.JobSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MediaSearchRead - Return movie media search result
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
  MediaSearchRead(
    req: operations.MediaSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/media/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MediaSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MediaSearchallRead - Return cast media search result
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
  MediaSearchallRead(
    req: operations.MediaSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/media/searchall/{user}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MediaSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MovieCastSearchRead - Return movie cast search result
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
  MovieCastSearchRead(
    req: operations.MovieCastSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie-cast/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MovieCastSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MovieCastSearchallRead - Return movie cast search result
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
  MovieCastSearchallRead(
    req: operations.MovieCastSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie-cast/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MovieCastSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MovieSearchRead - Return movie search result
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
  MovieSearchRead(
    req: operations.MovieSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/movie/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MovieSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NewsSearchRead - Return news or article search result
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
  NewsSearchRead(
    req: operations.NewsSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/news/search/{title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NewsSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PeopleSearchRead - Return cast search result
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
  PeopleSearchRead(
    req: operations.PeopleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PeopleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PeopleSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/people/search/{user}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PeopleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ShowtimeSearchallRead - Return showtime search result
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
  ShowtimeSearchallRead(
    req: operations.ShowtimeSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowtimeSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowtimeSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/showtime/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ShowtimeSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // WatchlistSearchRead - Return watchlist search result
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
  WatchlistSearchRead(
    req: operations.WatchlistSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WatchlistSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WatchlistSearchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/watchlist/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.WatchlistSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // WatchlistSearchallRead - Return watchlist search result
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
  WatchlistSearchallRead(
    req: operations.WatchlistSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WatchlistSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WatchlistSearchallReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v1/watchlist/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.WatchlistSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
