import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Financial {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCommitteeCommitteeIdReports -
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     *
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     *
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    getCommitteeCommitteeIdReports(req: operations.GetCommitteeCommitteeIdReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdReportsResponse>;
    /**
     * getCommitteeCommitteeIdTotals -
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
    getCommitteeCommitteeIdTotals(req: operations.GetCommitteeCommitteeIdTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdTotalsResponse>;
    /**
     * getElections -
     * Look at the top-level financial information for all candidates running for the same
     * office.
     *
     * Choose a 2-year cycle, and `house`, `senate` or `presidential`.
     *
     * If you are looking for a Senate seat, you will need to select the state using a two-letter
     * abbreviation.
     *
     * House races require state and a two-digit district number.
     *
     * Since this endpoint reflects financial information, it will only have candidates once they file
     * financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
     * candidates that filed to run for a particular seat.
     *
    **/
    getElections(req: operations.GetElectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetElectionsResponse>;
    /**
     * getElectionsSearch -
     * List elections by cycle, office, state, and district.
     *
    **/
    getElectionsSearch(req: operations.GetElectionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetElectionsSearchResponse>;
    /**
     * getElectionsSummary -
     * List elections by cycle, office, state, and district.
     *
    **/
    getElectionsSummary(req: operations.GetElectionsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetElectionsSummaryResponse>;
    /**
     * getReportsEntityType -
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     *
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     *
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    getReportsEntityType(req: operations.GetReportsEntityTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsEntityTypeResponse>;
    /**
     * getTotalsByEntity -
     * Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.
     *
     * This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.
     *
    **/
    getTotalsByEntity(req: operations.GetTotalsByEntityRequest, config?: AxiosRequestConfig): Promise<operations.GetTotalsByEntityResponse>;
    /**
     * getTotalsEntityType -
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
    getTotalsEntityType(req: operations.GetTotalsEntityTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTotalsEntityTypeResponse>;
}
