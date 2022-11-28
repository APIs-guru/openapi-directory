import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Candidate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCandidateCandidateId -
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     *
    **/
    getCandidateCandidateId(req: operations.GetCandidateCandidateIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdResponse>;
    /**
     * getCandidateCandidateIdHistory -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    getCandidateCandidateIdHistory(req: operations.GetCandidateCandidateIdHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdHistoryResponse>;
    /**
     * getCandidateCandidateIdHistoryCycle -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    getCandidateCandidateIdHistoryCycle(req: operations.GetCandidateCandidateIdHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdHistoryCycleResponse>;
    /**
     * getCandidateCandidateIdTotals -
     * This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
     * which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
     *
     * The cycle is named after the even-numbered year and includes the year before it. To obtain
     * totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
     * is the next year — for example, in 2015, the current cycle is 2016.
     *
     * For presidential and Senate candidates, multiple two-year cycles exist between elections.
     *
     *
    **/
    getCandidateCandidateIdTotals(req: operations.GetCandidateCandidateIdTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdTotalsResponse>;
    /**
     * getCandidates -
     * Fetch basic information about candidates, and use parameters to filter results to the
     * candidates you're looking for.
     *
     * Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
     * particular office sought. If a candidate runs for the same office multiple times, the ID
     * stays the same. If the same person runs for another office — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     *
    **/
    getCandidates(req: operations.GetCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidatesResponse>;
    /**
     * getCandidatesSearch -
     * Fetch basic information about candidates and their principal committees.
     *
     * Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
     * particular office sought. If a candidate runs for the same office over time, that ID
     * stays the same. If the same person runs for multiple offices — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     *
     * The candidate endpoints primarily use data from FEC registration
     * [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
     * [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
     *
    **/
    getCandidatesSearch(req: operations.GetCandidatesSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidatesSearchResponse>;
    /**
     * getCandidatesTotals -
     * Aggregated candidate receipts and disbursements grouped by cycle.
     *
    **/
    getCandidatesTotals(req: operations.GetCandidatesTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidatesTotalsResponse>;
    /**
     * getCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.
     *
    **/
    getCandidatesTotalsByOffice(req: operations.GetCandidatesTotalsByOfficeRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidatesTotalsByOfficeResponse>;
    /**
     * getCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.
     *
    **/
    getCandidatesTotalsByOfficeByParty(req: operations.GetCandidatesTotalsByOfficeByPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidatesTotalsByOfficeByPartyResponse>;
    /**
     * getCommitteeCommitteeIdCandidates -
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     *
    **/
    getCommitteeCommitteeIdCandidates(req: operations.GetCommitteeCommitteeIdCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdCandidatesResponse>;
    /**
     * getCommitteeCommitteeIdCandidatesHistory -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    getCommitteeCommitteeIdCandidatesHistory(req: operations.GetCommitteeCommitteeIdCandidatesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryResponse>;
    /**
     * getCommitteeCommitteeIdCandidatesHistoryCycle -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    getCommitteeCommitteeIdCandidatesHistoryCycle(req: operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse>;
}
