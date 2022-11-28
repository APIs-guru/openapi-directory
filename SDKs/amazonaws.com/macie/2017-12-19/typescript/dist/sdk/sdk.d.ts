import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://macie.{region}.amazonaws.com", "https://macie.{region}.amazonaws.com", "http://macie.{region}.amazonaws.com.cn", "https://macie.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateMemberAccount - Associates a specified AWS account with Amazon Macie Classic as a member account.
    **/
    associateMemberAccount(req: operations.AssociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberAccountResponse>;
    /**
     * associateS3Resources - Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If memberAccountId isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
    **/
    associateS3Resources(req: operations.AssociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssociateS3ResourcesResponse>;
    /**
     * disassociateMemberAccount - Removes the specified member account from Amazon Macie Classic.
    **/
    disassociateMemberAccount(req: operations.DisassociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberAccountResponse>;
    /**
     * disassociateS3Resources - Removes specified S3 resources from being monitored by Amazon Macie Classic. If memberAccountId isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
    **/
    disassociateS3Resources(req: operations.DisassociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateS3ResourcesResponse>;
    /**
     * listMemberAccounts - Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
    **/
    listMemberAccounts(req: operations.ListMemberAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberAccountsResponse>;
    /**
     * listS3Resources - Lists all the S3 resources associated with Amazon Macie Classic. If memberAccountId isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the action lists the S3 resources associated with Macie Classic for the specified member account.
    **/
    listS3Resources(req: operations.ListS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListS3ResourcesResponse>;
    /**
     * updateS3Resources - Updates the classification types for the specified S3 resources. If memberAccountId isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
    **/
    updateS3Resources(req: operations.UpdateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateS3ResourcesResponse>;
}
export {};
