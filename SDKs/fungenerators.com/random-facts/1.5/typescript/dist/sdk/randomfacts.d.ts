import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RandomFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFact - Get a Fact belonging to the id.
    **/
    getFact(req: operations.GetFactRequest, config?: AxiosRequestConfig): Promise<operations.GetFactResponse>;
    /**
     * getFactCategories - Get a random Fact.
    **/
    getFactCategories(req: operations.GetFactCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFactCategoriesResponse>;
    /**
     * getFactRandom - Get a random Fact for a given category(optional) and subcategory(optional).
    **/
    getFactRandom(req: operations.GetFactRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetFactRandomResponse>;
    /**
     * getFactSearch - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
    **/
    getFactSearch(req: operations.GetFactSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFactSearchResponse>;
}
