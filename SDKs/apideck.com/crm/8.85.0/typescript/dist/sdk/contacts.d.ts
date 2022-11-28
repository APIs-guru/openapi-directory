import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contactsAdd - Create contact
     *
     * Create contact
    **/
    contactsAdd(req: operations.ContactsAddRequest, config?: AxiosRequestConfig): Promise<operations.ContactsAddResponse>;
    /**
     * contactsAll - List contacts
     *
     * List contacts
    **/
    contactsAll(req: operations.ContactsAllRequest, config?: AxiosRequestConfig): Promise<operations.ContactsAllResponse>;
    /**
     * contactsDelete - Delete contact
     *
     * Delete contact
    **/
    contactsDelete(req: operations.ContactsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContactsDeleteResponse>;
    /**
     * contactsOne - Get contact
     *
     * Get contact
    **/
    contactsOne(req: operations.ContactsOneRequest, config?: AxiosRequestConfig): Promise<operations.ContactsOneResponse>;
    /**
     * contactsUpdate - Update contact
     *
     * Update contact
    **/
    contactsUpdate(req: operations.ContactsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContactsUpdateResponse>;
}
