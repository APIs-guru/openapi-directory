import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTmdbmovies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTmdbmovies - Search API for 'Tmdb Movies' entry type
     *
     * API to search for entries of type Tmdb Movies
    **/
    searchTmdbmovies(req: operations.SearchTmdbmoviesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTmdbmoviesResponse>;
}
