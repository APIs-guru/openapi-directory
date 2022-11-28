import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Meta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * metaGet - Get GitHub Enterprise Server meta information
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/meta#get-github-meta-information - API method documentation
    **/
    metaGet(config?: AxiosRequestConfig): Promise<operations.MetaGetResponse>;
    /**
     * metaGetOctocat - Get Octocat
     *
     * Get the octocat as ASCII art
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/meta#get-octocat - API method documentation
    **/
    metaGetOctocat(req: operations.MetaGetOctocatRequest, config?: AxiosRequestConfig): Promise<operations.MetaGetOctocatResponse>;
    /**
     * metaGetZen - Get the Zen of GitHub
     *
     * Get a random sentence from the Zen of GitHub
    **/
    metaGetZen(config?: AxiosRequestConfig): Promise<operations.MetaGetZenResponse>;
    /**
     * metaRoot - GitHub API Root
     *
     * Get Hypermedia links to resources accessible in GitHub's REST API
     *
     * https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#root-endpoint - API method documentation
    **/
    metaRoot(config?: AxiosRequestConfig): Promise<operations.MetaRootResponse>;
}
