import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Presidential {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPresidentialContributionsByCandidate -
     * Net receipts per candidate.
     *
     * Filter with `contributor_state='US'` for national totals
     *
    **/
    getPresidentialContributionsByCandidate(req: operations.GetPresidentialContributionsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsByCandidateResponse>;
    /**
     * getPresidentialContributionsBySize -
     * Contribution receipts by size per candidate.
     *
     * Filter by candidate_id, election_year and/or size
     *
    **/
    getPresidentialContributionsBySize(req: operations.GetPresidentialContributionsBySizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsBySizeResponse>;
    /**
     * getPresidentialContributionsByState -
     * Contribution receipts by state per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
    **/
    getPresidentialContributionsByState(req: operations.GetPresidentialContributionsByStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsByStateResponse>;
    /**
     * getPresidentialCoverageEndDate -
     * Coverage end date per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
    **/
    getPresidentialCoverageEndDate(req: operations.GetPresidentialCoverageEndDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialCoverageEndDateResponse>;
    /**
     * getPresidentialFinancialSummary -
     * Financial summary per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
    **/
    getPresidentialFinancialSummary(req: operations.GetPresidentialFinancialSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialFinancialSummaryResponse>;
}
