import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applicants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applicantsAdd - Create applicant
     *
     * Create applicant
    **/
    applicantsAdd(req: operations.ApplicantsAddRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsAddResponse>;
    /**
     * applicantsAll - List applicants
     *
     * List applicants
    **/
    applicantsAll(req: operations.ApplicantsAllRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsAllResponse>;
    /**
     * applicantsOne - Get applicant
     *
     * Get applicant
    **/
    applicantsOne(req: operations.ApplicantsOneRequest, config?: AxiosRequestConfig): Promise<operations.ApplicantsOneResponse>;
}
