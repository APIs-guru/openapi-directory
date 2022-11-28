import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Committee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCandidateCandidateIdCommittees -
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     *
    **/
    getCandidateCandidateIdCommittees(req: operations.GetCandidateCandidateIdCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesResponse>;
    /**
     * getCandidateCandidateIdCommitteesHistory -
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
    **/
    getCandidateCandidateIdCommitteesHistory(req: operations.GetCandidateCandidateIdCommitteesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesHistoryResponse>;
    /**
     * getCandidateCandidateIdCommitteesHistoryCycle -
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
    **/
    getCandidateCandidateIdCommitteesHistoryCycle(req: operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse>;
    /**
     * getCommitteeCommitteeId -
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     *
    **/
    getCommitteeCommitteeId(req: operations.GetCommitteeCommitteeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdResponse>;
    /**
     * getCommitteeCommitteeIdHistory -
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
    **/
    getCommitteeCommitteeIdHistory(req: operations.GetCommitteeCommitteeIdHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdHistoryResponse>;
    /**
     * getCommitteeCommitteeIdHistoryCycle -
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
    **/
    getCommitteeCommitteeIdHistoryCycle(req: operations.GetCommitteeCommitteeIdHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdHistoryCycleResponse>;
    /**
     * getCommittees -
     * Fetch basic information about committees and filers. Use parameters to filter for
     * particular characteristics.
     *
     *
    **/
    getCommittees(req: operations.GetCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteesResponse>;
}
