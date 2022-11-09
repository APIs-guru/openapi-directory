import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Create activity
    **/
    ActivitiesAdd(req: operations.ActivitiesAddRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesAddResponse>;
    /**
     * List activities
    **/
    ActivitiesAll(req: operations.ActivitiesAllRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesAllResponse>;
    /**
     * Delete activity
    **/
    ActivitiesDelete(req: operations.ActivitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesDeleteResponse>;
    /**
     * Get activity
    **/
    ActivitiesOne(req: operations.ActivitiesOneRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesOneResponse>;
    /**
     * Update activity
    **/
    ActivitiesUpdate(req: operations.ActivitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesUpdateResponse>;
    /**
     * Create company
    **/
    CompaniesAdd(req: operations.CompaniesAddRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAddResponse>;
    /**
     * List companies
    **/
    CompaniesAll(req: operations.CompaniesAllRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAllResponse>;
    /**
     * Delete company
    **/
    CompaniesDelete(req: operations.CompaniesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesDeleteResponse>;
    /**
     * Get company
    **/
    CompaniesOne(req: operations.CompaniesOneRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesOneResponse>;
    /**
     * Update company
    **/
    CompaniesUpdate(req: operations.CompaniesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesUpdateResponse>;
    /**
     * Create contact
    **/
    ContactsAdd(req: operations.ContactsAddRequest, config?: AxiosRequestConfig): Promise<operations.ContactsAddResponse>;
    /**
     * List contacts
    **/
    ContactsAll(req: operations.ContactsAllRequest, config?: AxiosRequestConfig): Promise<operations.ContactsAllResponse>;
    /**
     * Delete contact
    **/
    ContactsDelete(req: operations.ContactsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContactsDeleteResponse>;
    /**
     * Get contact
    **/
    ContactsOne(req: operations.ContactsOneRequest, config?: AxiosRequestConfig): Promise<operations.ContactsOneResponse>;
    /**
     * Update contact
    **/
    ContactsUpdate(req: operations.ContactsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContactsUpdateResponse>;
    /**
     * Create lead
    **/
    LeadsAdd(req: operations.LeadsAddRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAddResponse>;
    /**
     * List leads
    **/
    LeadsAll(req: operations.LeadsAllRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAllResponse>;
    /**
     * Delete lead
    **/
    LeadsDelete(req: operations.LeadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LeadsDeleteResponse>;
    /**
     * Get lead
    **/
    LeadsOne(req: operations.LeadsOneRequest, config?: AxiosRequestConfig): Promise<operations.LeadsOneResponse>;
    /**
     * Update lead
    **/
    LeadsUpdate(req: operations.LeadsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LeadsUpdateResponse>;
    /**
     * Create note
    **/
    NotesAdd(req: operations.NotesAddRequest, config?: AxiosRequestConfig): Promise<operations.NotesAddResponse>;
    /**
     * List notes
    **/
    NotesAll(req: operations.NotesAllRequest, config?: AxiosRequestConfig): Promise<operations.NotesAllResponse>;
    /**
     * Delete note
    **/
    NotesDelete(req: operations.NotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NotesDeleteResponse>;
    /**
     * Get note
    **/
    NotesOne(req: operations.NotesOneRequest, config?: AxiosRequestConfig): Promise<operations.NotesOneResponse>;
    /**
     * Update note
    **/
    NotesUpdate(req: operations.NotesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.NotesUpdateResponse>;
    /**
     * Create opportunity
    **/
    OpportunitiesAdd(req: operations.OpportunitiesAddRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAddResponse>;
    /**
     * List opportunities
    **/
    OpportunitiesAll(req: operations.OpportunitiesAllRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAllResponse>;
    /**
     * Delete opportunity
    **/
    OpportunitiesDelete(req: operations.OpportunitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesDeleteResponse>;
    /**
     * Get opportunity
    **/
    OpportunitiesOne(req: operations.OpportunitiesOneRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesOneResponse>;
    /**
     * Update opportunity
    **/
    OpportunitiesUpdate(req: operations.OpportunitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesUpdateResponse>;
    /**
     * Create pipeline
    **/
    PipelinesAdd(req: operations.PipelinesAddRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesAddResponse>;
    /**
     * List pipelines
    **/
    PipelinesAll(req: operations.PipelinesAllRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesAllResponse>;
    /**
     * Delete pipeline
    **/
    PipelinesDelete(req: operations.PipelinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesDeleteResponse>;
    /**
     * Get pipeline
    **/
    PipelinesOne(req: operations.PipelinesOneRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesOneResponse>;
    /**
     * Update pipeline
    **/
    PipelinesUpdate(req: operations.PipelinesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesUpdateResponse>;
    /**
     * Create user
    **/
    UsersAdd(req: operations.UsersAddRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddResponse>;
    /**
     * List users
    **/
    UsersAll(req: operations.UsersAllRequest, config?: AxiosRequestConfig): Promise<operations.UsersAllResponse>;
    /**
     * Delete user
    **/
    UsersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * Get user
    **/
    UsersOne(req: operations.UsersOneRequest, config?: AxiosRequestConfig): Promise<operations.UsersOneResponse>;
    /**
     * Update user
    **/
    UsersUpdate(req: operations.UsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
}
export {};
