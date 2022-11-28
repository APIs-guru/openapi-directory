import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IndependentExpenditures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSchedulesScheduleE -
     * Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
     * bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
     * the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.
     *
     * An independent expenditure is an expenditure for a communication "expressly advocating the election or
     * defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
     * or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
     * a political party or its agents."
     *
     * Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
     * and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
     * `/schedule/schedule_e/`.
     *
     * Due to the large quantity of Schedule E filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `expenditure_amount`, you might receive a page of
     * results with the following pagination information:
     *
     * ```
     *  "pagination": {
     *     "count": 152623,
     *     "last_indexes": {
     *       "last_index": "3023037",
     *       "last_expenditure_amount": -17348.5
     *     },
     *     "per_page": 20,
     *     "pages": 7632
     *   }
     * }
     * ```
     *
     * To fetch the next page of sorted results, append `last_index=3023037` and
     * `last_expenditure_amount=` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date,
     * e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
     * filtered out.  This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     *
     * Note: because the Schedule E data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     *
    **/
    getSchedulesScheduleE(req: operations.GetSchedulesScheduleERequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleEResponse>;
    /**
     * getSchedulesScheduleEByCandidate -
     * Schedule E receipts aggregated by recipient candidate. To avoid double
     * counting, memoed items are not included.
     *
    **/
    getSchedulesScheduleEByCandidate(req: operations.GetSchedulesScheduleEByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleEByCandidateResponse>;
    /**
     * getSchedulesScheduleEEfile -
     * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
     *
    **/
    getSchedulesScheduleEEfile(req: operations.GetSchedulesScheduleEEfileRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleEEfileResponse>;
    /**
     * getSchedulesScheduleETotalsByCandidate -
     * Total independent expenditure on supported or opposed candidates by cycle or candidate election year.
     *
    **/
    getSchedulesScheduleETotalsByCandidate(req: operations.GetSchedulesScheduleETotalsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleETotalsByCandidateResponse>;
}
