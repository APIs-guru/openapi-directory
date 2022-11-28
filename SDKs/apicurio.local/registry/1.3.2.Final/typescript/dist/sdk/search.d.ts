import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchArtifacts - Search for artifacts
     *
     * Returns a paginated list of all artifacts that match the provided search criteria.
     *
    **/
    searchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * searchVersions - Search artifact versions
     *
     * Searches for versions of a specific artifact.  This is typically used to get a listing
     * of all versions of an artifact (for example, in a user interface).
    **/
    searchVersions(req: operations.SearchVersionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchVersionsResponse>;
}
