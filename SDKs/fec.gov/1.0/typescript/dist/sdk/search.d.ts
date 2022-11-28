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
     * getNamesCandidates -
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     *
    **/
    getNamesCandidates(req: operations.GetNamesCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesCandidatesResponse>;
    /**
     * getNamesCommittees -
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     *
    **/
    getNamesCommittees(req: operations.GetNamesCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesCommitteesResponse>;
}
