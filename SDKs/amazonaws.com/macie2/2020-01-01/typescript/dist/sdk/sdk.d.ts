import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://macie2.{region}.amazonaws.com", "https://macie2.{region}.amazonaws.com", "http://macie2.{region}.amazonaws.com.cn", "https://macie2.{region}.amazonaws.com.cn"];
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
     * acceptInvitation - Accepts an Amazon Macie membership invitation that was received from a specific account.
    **/
    acceptInvitation(req: operations.AcceptInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptInvitationResponse>;
    /**
     * batchGetCustomDataIdentifiers - Retrieves information about one or more custom data identifiers.
    **/
    batchGetCustomDataIdentifiers(req: operations.BatchGetCustomDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCustomDataIdentifiersResponse>;
    /**
     * createClassificationJob -  <p>Creates and defines the settings for a classification job.</p>
    **/
    createClassificationJob(req: operations.CreateClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateClassificationJobResponse>;
    /**
     * createCustomDataIdentifier - Creates and defines the criteria and other settings for a custom data identifier.
    **/
    createCustomDataIdentifier(req: operations.CreateCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomDataIdentifierResponse>;
    /**
     * createFindingsFilter - Creates and defines the criteria and other settings for a findings filter.
    **/
    createFindingsFilter(req: operations.CreateFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.CreateFindingsFilterResponse>;
    /**
     * createInvitations - Sends an Amazon Macie membership invitation to one or more accounts.
    **/
    createInvitations(req: operations.CreateInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInvitationsResponse>;
    /**
     * createMember - Associates an account with an Amazon Macie administrator account.
    **/
    createMember(req: operations.CreateMemberRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    /**
     * createSampleFindings - Creates sample findings.
    **/
    createSampleFindings(req: operations.CreateSampleFindingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateSampleFindingsResponse>;
    /**
     * declineInvitations - Declines Amazon Macie membership invitations that were received from specific accounts.
    **/
    declineInvitations(req: operations.DeclineInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeclineInvitationsResponse>;
    /**
     * deleteCustomDataIdentifier - Soft deletes a custom data identifier.
    **/
    deleteCustomDataIdentifier(req: operations.DeleteCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomDataIdentifierResponse>;
    /**
     * deleteFindingsFilter - Deletes a findings filter.
    **/
    deleteFindingsFilter(req: operations.DeleteFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFindingsFilterResponse>;
    /**
     * deleteInvitations - Deletes Amazon Macie membership invitations that were received from specific accounts.
    **/
    deleteInvitations(req: operations.DeleteInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInvitationsResponse>;
    /**
     * deleteMember - Deletes the association between an Amazon Macie administrator account and an account.
    **/
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    /**
     * describeBuckets -  <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
    **/
    describeBuckets(req: operations.DescribeBucketsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBucketsResponse>;
    /**
     * describeClassificationJob - Retrieves the status and settings for a classification job.
    **/
    describeClassificationJob(req: operations.DescribeClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClassificationJobResponse>;
    /**
     * describeOrganizationConfiguration - Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.
    **/
    describeOrganizationConfiguration(req: operations.DescribeOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigurationResponse>;
    /**
     * disableMacie - Disables an Amazon Macie account and deletes Macie resources for the account.
    **/
    disableMacie(req: operations.DisableMacieRequest, config?: AxiosRequestConfig): Promise<operations.DisableMacieResponse>;
    /**
     * disableOrganizationAdminAccount - Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
    **/
    disableOrganizationAdminAccount(req: operations.DisableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisableOrganizationAdminAccountResponse>;
    /**
     * disassociateFromAdministratorAccount - Disassociates a member account from its Amazon Macie administrator account.
    **/
    disassociateFromAdministratorAccount(req: operations.DisassociateFromAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromAdministratorAccountResponse>;
    /**
     * disassociateFromMasterAccount - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
    **/
    disassociateFromMasterAccount(req: operations.DisassociateFromMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromMasterAccountResponse>;
    /**
     * disassociateMember - Disassociates an Amazon Macie administrator account from a member account.
    **/
    disassociateMember(req: operations.DisassociateMemberRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberResponse>;
    /**
     * enableMacie - Enables Amazon Macie and specifies the configuration settings for a Macie account.
    **/
    enableMacie(req: operations.EnableMacieRequest, config?: AxiosRequestConfig): Promise<operations.EnableMacieResponse>;
    /**
     * enableOrganizationAdminAccount - Designates an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
    **/
    enableOrganizationAdminAccount(req: operations.EnableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.EnableOrganizationAdminAccountResponse>;
    /**
     * getAdministratorAccount - Retrieves information about the Amazon Macie administrator account for an account.
    **/
    getAdministratorAccount(req: operations.GetAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministratorAccountResponse>;
    /**
     * getBucketStatistics -  <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
    **/
    getBucketStatistics(req: operations.GetBucketStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketStatisticsResponse>;
    /**
     * getClassificationExportConfiguration - Retrieves the configuration settings for storing data classification results.
    **/
    getClassificationExportConfiguration(req: operations.GetClassificationExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationExportConfigurationResponse>;
    /**
     * getCustomDataIdentifier - Retrieves the criteria and other settings for a custom data identifier.
    **/
    getCustomDataIdentifier(req: operations.GetCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomDataIdentifierResponse>;
    /**
     * getFindingStatistics -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
    **/
    getFindingStatistics(req: operations.GetFindingStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingStatisticsResponse>;
    /**
     * getFindings - Retrieves the details of one or more findings.
    **/
    getFindings(req: operations.GetFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsResponse>;
    /**
     * getFindingsFilter - Retrieves the criteria and other settings for a findings filter.
    **/
    getFindingsFilter(req: operations.GetFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsFilterResponse>;
    /**
     * getFindingsPublicationConfiguration - Retrieves the configuration settings for publishing findings to Security Hub.
    **/
    getFindingsPublicationConfiguration(req: operations.GetFindingsPublicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsPublicationConfigurationResponse>;
    /**
     * getInvitationsCount - Retrieves the count of Amazon Macie membership invitations that were received by an account.
    **/
    getInvitationsCount(req: operations.GetInvitationsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetInvitationsCountResponse>;
    /**
     * getMacieSession - Retrieves the current status and configuration settings for an Amazon Macie account.
    **/
    getMacieSession(req: operations.GetMacieSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetMacieSessionResponse>;
    /**
     * getMasterAccount - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
    **/
    getMasterAccount(req: operations.GetMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMasterAccountResponse>;
    /**
     * getMember - Retrieves information about an account that's associated with an Amazon Macie administrator account.
    **/
    getMember(req: operations.GetMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberResponse>;
    /**
     * getUsageStatistics - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
    **/
    getUsageStatistics(req: operations.GetUsageStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageStatisticsResponse>;
    /**
     * getUsageTotals - Retrieves (queries) aggregated usage data for an account.
    **/
    getUsageTotals(req: operations.GetUsageTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageTotalsResponse>;
    /**
     * listClassificationJobs - Retrieves a subset of information about one or more classification jobs.
    **/
    listClassificationJobs(req: operations.ListClassificationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListClassificationJobsResponse>;
    /**
     * listCustomDataIdentifiers - Retrieves a subset of information about all the custom data identifiers for an account.
    **/
    listCustomDataIdentifiers(req: operations.ListCustomDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomDataIdentifiersResponse>;
    /**
     * listFindings - Retrieves a subset of information about one or more findings.
    **/
    listFindings(req: operations.ListFindingsRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsResponse>;
    /**
     * listFindingsFilters - Retrieves a subset of information about all the findings filters for an account.
    **/
    listFindingsFilters(req: operations.ListFindingsFiltersRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsFiltersResponse>;
    /**
     * listInvitations - Retrieves information about the Amazon Macie membership invitations that were received by an account.
    **/
    listInvitations(req: operations.ListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInvitationsResponse>;
    /**
     * listManagedDataIdentifiers - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
    **/
    listManagedDataIdentifiers(req: operations.ListManagedDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedDataIdentifiersResponse>;
    /**
     * listMembers - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
    **/
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * listOrganizationAdminAccounts - Retrieves information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
    **/
    listOrganizationAdminAccounts(req: operations.ListOrganizationAdminAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationAdminAccountsResponse>;
    /**
     * listTagsForResource - Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putClassificationExportConfiguration - Creates or updates the configuration settings for storing data classification results.
    **/
    putClassificationExportConfiguration(req: operations.PutClassificationExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutClassificationExportConfigurationResponse>;
    /**
     * putFindingsPublicationConfiguration - Updates the configuration settings for publishing findings to Security Hub.
    **/
    putFindingsPublicationConfiguration(req: operations.PutFindingsPublicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutFindingsPublicationConfigurationResponse>;
    /**
     * searchResources - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
    **/
    searchResources(req: operations.SearchResourcesRequest, config?: AxiosRequestConfig): Promise<operations.SearchResourcesResponse>;
    /**
     * tagResource - Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testCustomDataIdentifier - Tests a custom data identifier.
    **/
    testCustomDataIdentifier(req: operations.TestCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.TestCustomDataIdentifierResponse>;
    /**
     * untagResource - Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateClassificationJob - Changes the status of a classification job.
    **/
    updateClassificationJob(req: operations.UpdateClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClassificationJobResponse>;
    /**
     * updateFindingsFilter - Updates the criteria and other settings for a findings filter.
    **/
    updateFindingsFilter(req: operations.UpdateFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFindingsFilterResponse>;
    /**
     * updateMacieSession - Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
    **/
    updateMacieSession(req: operations.UpdateMacieSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMacieSessionResponse>;
    /**
     * updateMemberSession - Enables an Amazon Macie administrator to suspend or re-enable a member account.
    **/
    updateMemberSession(req: operations.UpdateMemberSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberSessionResponse>;
    /**
     * updateOrganizationConfiguration - Updates the Amazon Macie configuration settings for an Amazon Web Services organization.
    **/
    updateOrganizationConfiguration(req: operations.UpdateOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigurationResponse>;
}
export {};
