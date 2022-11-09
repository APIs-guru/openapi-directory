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
    AssociateMemberAccount(req: operations.AssociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberAccountResponse>;
    AssociateS3Resources(req: operations.AssociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssociateS3ResourcesResponse>;
    DisassociateMemberAccount(req: operations.DisassociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberAccountResponse>;
    DisassociateS3Resources(req: operations.DisassociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateS3ResourcesResponse>;
    ListMemberAccounts(req: operations.ListMemberAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberAccountsResponse>;
    ListS3Resources(req: operations.ListS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListS3ResourcesResponse>;
    UpdateS3Resources(req: operations.UpdateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateS3ResourcesResponse>;
}
export {};
