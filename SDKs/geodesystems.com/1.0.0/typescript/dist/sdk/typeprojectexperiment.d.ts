import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectExperiment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectExperiment - Search API for 'Experiment' entry type
     *
     * API to search for entries of type Experiment
    **/
    searchProjectExperiment(req: operations.SearchProjectExperimentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectExperimentResponse>;
}
