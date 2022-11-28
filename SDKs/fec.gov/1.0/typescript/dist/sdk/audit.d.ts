import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Audit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAuditCase -
     * This endpoint contains Final Audit Reports approved by the Commission since inception.
     * The search can be based on information about the audited committee (Name, FEC ID Number, Type,
     * Election Cycle) or the issues covered in the report.
     *
    **/
    getAuditCase(req: operations.GetAuditCaseRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditCaseResponse>;
    /**
     * getAuditCategory -
     * This lists the options for the categories and subcategories available in the /audit-search/ endpoint.
     *
    **/
    getAuditCategory(req: operations.GetAuditCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditCategoryResponse>;
    /**
     * getAuditPrimaryCategory -
     * This lists the options for the primary categories available in the /audit-search/ endpoint.
     *
    **/
    getAuditPrimaryCategory(req: operations.GetAuditPrimaryCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditPrimaryCategoryResponse>;
    /**
     * getNamesAuditCandidates -
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     *
    **/
    getNamesAuditCandidates(req: operations.GetNamesAuditCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesAuditCandidatesResponse>;
    /**
     * getNamesAuditCommittees -
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     *
    **/
    getNamesAuditCommittees(req: operations.GetNamesAuditCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesAuditCommitteesResponse>;
}
