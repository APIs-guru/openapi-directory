import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Dates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCalendarDates -
     * Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
     * events into one calendar.
     *
     * State and report type filtering is no longer available.
     *
    **/
    getCalendarDates(req: operations.GetCalendarDatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarDatesResponse>;
    /**
     * getCalendarDatesExport -
     * Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.
     *
     * Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
     * events into one calendar.
     *
     * State filtering now applies to elections, reports and reporting periods.
     *
     * Presidential pre-primary report due dates are not shown on even years.
     * Filers generally opt to file monthly rather than submit over 50 pre-primary election
     * reports. All reporting deadlines are available at /reporting-dates/ for reference.
     *
     * This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
     * that creates the calendar.
     *
     *
    **/
    getCalendarDatesExport(req: operations.GetCalendarDatesExportRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarDatesExportResponse>;
    /**
     * getElectionDates -
     * FEC election dates since 1995.
     *
    **/
    getElectionDates(req: operations.GetElectionDatesRequest, config?: AxiosRequestConfig): Promise<operations.GetElectionDatesResponse>;
    /**
     * getReportingDates -
     * FEC election dates since 1995.
     *
    **/
    getReportingDates(req: operations.GetReportingDatesRequest, config?: AxiosRequestConfig): Promise<operations.GetReportingDatesResponse>;
}
