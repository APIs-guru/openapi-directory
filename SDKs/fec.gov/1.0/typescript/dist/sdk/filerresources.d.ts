import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FilerResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRadAnalyst -
     * Use this endpoint to look up the RAD Analyst for a committee.
     *
     * The mission of the Reports Analysis Division (RAD) is to ensure that
     * campaigns and political committees file timely and accurate reports that fully disclose
     * their financial activities.  RAD is responsible for reviewing statements and financial
     * reports filed by political committees participating in federal elections, providing
     * assistance and guidance to the committees to properly file their reports, and for taking
     * appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).
     *
    **/
    getRadAnalyst(req: operations.GetRadAnalystRequest, config?: AxiosRequestConfig): Promise<operations.GetRadAnalystResponse>;
    /**
     * getStateElectionOffice -
     * State laws and procedures govern elections for state or local offices as well as
     * how candidates appear on election ballots.
     * Contact the appropriate state election office for more information.
     *
    **/
    getStateElectionOffice(req: operations.GetStateElectionOfficeRequest, config?: AxiosRequestConfig): Promise<operations.GetStateElectionOfficeResponse>;
}
