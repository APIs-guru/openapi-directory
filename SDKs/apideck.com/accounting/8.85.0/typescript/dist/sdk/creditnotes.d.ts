import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreditNotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * creditNotesAdd - Create Credit Note
     *
     * Create Credit Note
    **/
    creditNotesAdd(req: operations.CreditNotesAddRequest, config?: AxiosRequestConfig): Promise<operations.CreditNotesAddResponse>;
    /**
     * creditNotesAll - List Credit Notes
     *
     * List Credit Notes
    **/
    creditNotesAll(req: operations.CreditNotesAllRequest, config?: AxiosRequestConfig): Promise<operations.CreditNotesAllResponse>;
    /**
     * creditNotesDelete - Delete Credit Note
     *
     * Delete Credit Note
    **/
    creditNotesDelete(req: operations.CreditNotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CreditNotesDeleteResponse>;
    /**
     * creditNotesOne - Get Credit Note
     *
     * Get Credit Note
    **/
    creditNotesOne(req: operations.CreditNotesOneRequest, config?: AxiosRequestConfig): Promise<operations.CreditNotesOneResponse>;
    /**
     * creditNotesUpdate - Update Credit Note
     *
     * Update Credit Note
    **/
    creditNotesUpdate(req: operations.CreditNotesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CreditNotesUpdateResponse>;
}
