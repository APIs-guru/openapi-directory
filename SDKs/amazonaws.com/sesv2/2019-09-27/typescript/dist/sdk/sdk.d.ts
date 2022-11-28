import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://email.{region}.amazonaws.com", "https://email.{region}.amazonaws.com", "http://email.{region}.amazonaws.com.cn", "https://email.{region}.amazonaws.com.cn"];
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
     * createConfigurationSet - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
    **/
    createConfigurationSet(req: operations.CreateConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetResponse>;
    /**
     * createConfigurationSetEventDestination - <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
    **/
    createConfigurationSetEventDestination(req: operations.CreateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetEventDestinationResponse>;
    /**
     * createContact - Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
    **/
    createContact(req: operations.CreateContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactResponse>;
    /**
     * createContactList - Creates a contact list.
    **/
    createContactList(req: operations.CreateContactListRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactListResponse>;
    /**
     * createCustomVerificationEmailTemplate - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    createCustomVerificationEmailTemplate(req: operations.CreateCustomVerificationEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomVerificationEmailTemplateResponse>;
    /**
     * createDedicatedIpPool - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your AWS account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
    **/
    createDedicatedIpPool(req: operations.CreateDedicatedIpPoolRequest, config?: AxiosRequestConfig): Promise<operations.CreateDedicatedIpPoolResponse>;
    /**
     * createDeliverabilityTestReport - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
    **/
    createDeliverabilityTestReport(req: operations.CreateDeliverabilityTestReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeliverabilityTestReportResponse>;
    /**
     * createEmailIdentity - <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key that you want to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
    **/
    createEmailIdentity(req: operations.CreateEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmailIdentityResponse>;
    /**
     * createEmailIdentityPolicy - <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    createEmailIdentityPolicy(req: operations.CreateEmailIdentityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmailIdentityPolicyResponse>;
    /**
     * createEmailTemplate - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    createEmailTemplate(req: operations.CreateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmailTemplateResponse>;
    /**
     * createImportJob - Creates an import job for a data destination.
    **/
    createImportJob(req: operations.CreateImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateImportJobResponse>;
    /**
     * deleteConfigurationSet - <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
    **/
    deleteConfigurationSet(req: operations.DeleteConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetResponse>;
    /**
     * deleteConfigurationSetEventDestination - <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
    **/
    deleteConfigurationSetEventDestination(req: operations.DeleteConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetEventDestinationResponse>;
    /**
     * deleteContact - Removes a contact from a contact list.
    **/
    deleteContact(req: operations.DeleteContactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactResponse>;
    /**
     * deleteContactList - Deletes a contact list and all of the contacts on that list.
    **/
    deleteContactList(req: operations.DeleteContactListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactListResponse>;
    /**
     * deleteCustomVerificationEmailTemplate - <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/es/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    deleteCustomVerificationEmailTemplate(req: operations.DeleteCustomVerificationEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomVerificationEmailTemplateResponse>;
    /**
     * deleteDedicatedIpPool - Delete a dedicated IP pool.
    **/
    deleteDedicatedIpPool(req: operations.DeleteDedicatedIpPoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDedicatedIpPoolResponse>;
    /**
     * deleteEmailIdentity - Deletes an email identity. An identity can be either an email address or a domain name.
    **/
    deleteEmailIdentity(req: operations.DeleteEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailIdentityResponse>;
    /**
     * deleteEmailIdentityPolicy - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    deleteEmailIdentityPolicy(req: operations.DeleteEmailIdentityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailIdentityPolicyResponse>;
    /**
     * deleteEmailTemplate - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    deleteEmailTemplate(req: operations.DeleteEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailTemplateResponse>;
    /**
     * deleteSuppressedDestination - Removes an email address from the suppression list for your account.
    **/
    deleteSuppressedDestination(req: operations.DeleteSuppressedDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSuppressedDestinationResponse>;
    /**
     * getAccount - Obtain information about the email-sending status and capabilities of your Amazon SES account in the current AWS Region.
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getBlacklistReports - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
    **/
    getBlacklistReports(req: operations.GetBlacklistReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlacklistReportsResponse>;
    /**
     * getConfigurationSet - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
    **/
    getConfigurationSet(req: operations.GetConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetResponse>;
    /**
     * getConfigurationSetEventDestinations - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
    **/
    getConfigurationSetEventDestinations(req: operations.GetConfigurationSetEventDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetEventDestinationsResponse>;
    /**
     * getContact - Returns a contact from a contact list.
    **/
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * getContactList - Returns contact list metadata. It does not return any information about the contacts present in the list.
    **/
    getContactList(req: operations.GetContactListRequest, config?: AxiosRequestConfig): Promise<operations.GetContactListResponse>;
    /**
     * getCustomVerificationEmailTemplate - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    getCustomVerificationEmailTemplate(req: operations.GetCustomVerificationEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomVerificationEmailTemplateResponse>;
    /**
     * getDedicatedIp - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
    **/
    getDedicatedIp(req: operations.GetDedicatedIpRequest, config?: AxiosRequestConfig): Promise<operations.GetDedicatedIpResponse>;
    /**
     * getDedicatedIps - List the dedicated IP addresses that are associated with your AWS account.
    **/
    getDedicatedIps(req: operations.GetDedicatedIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetDedicatedIpsResponse>;
    /**
     * getDeliverabilityDashboardOptions - <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
    **/
    getDeliverabilityDashboardOptions(req: operations.GetDeliverabilityDashboardOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliverabilityDashboardOptionsResponse>;
    /**
     * getDeliverabilityTestReport - Retrieve the results of a predictive inbox placement test.
    **/
    getDeliverabilityTestReport(req: operations.GetDeliverabilityTestReportRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliverabilityTestReportResponse>;
    /**
     * getDomainDeliverabilityCampaign - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
    **/
    getDomainDeliverabilityCampaign(req: operations.GetDomainDeliverabilityCampaignRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDeliverabilityCampaignResponse>;
    /**
     * getDomainStatisticsReport - Retrieve inbox placement and engagement rates for the domains that you use to send email.
    **/
    getDomainStatisticsReport(req: operations.GetDomainStatisticsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainStatisticsReportResponse>;
    /**
     * getEmailIdentity - Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
    **/
    getEmailIdentity(req: operations.GetEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailIdentityResponse>;
    /**
     * getEmailIdentityPolicies - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    getEmailIdentityPolicies(req: operations.GetEmailIdentityPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailIdentityPoliciesResponse>;
    /**
     * getEmailTemplate - <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    getEmailTemplate(req: operations.GetEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailTemplateResponse>;
    /**
     * getImportJob - Provides information about an import job.
    **/
    getImportJob(req: operations.GetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.GetImportJobResponse>;
    /**
     * getSuppressedDestination - Retrieves information about a specific email address that's on the suppression list for your account.
    **/
    getSuppressedDestination(req: operations.GetSuppressedDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetSuppressedDestinationResponse>;
    /**
     * listConfigurationSets - <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
    **/
    listConfigurationSets(req: operations.ListConfigurationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationSetsResponse>;
    /**
     * listContactLists - Lists all of the contact lists available.
    **/
    listContactLists(req: operations.ListContactListsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactListsResponse>;
    /**
     * listCustomVerificationEmailTemplates - <p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    listCustomVerificationEmailTemplates(req: operations.ListCustomVerificationEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomVerificationEmailTemplatesResponse>;
    /**
     * listDedicatedIpPools - List all of the dedicated IP pools that exist in your AWS account in the current Region.
    **/
    listDedicatedIpPools(req: operations.ListDedicatedIpPoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListDedicatedIpPoolsResponse>;
    /**
     * listDeliverabilityTestReports - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
    **/
    listDeliverabilityTestReports(req: operations.ListDeliverabilityTestReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeliverabilityTestReportsResponse>;
    /**
     * listDomainDeliverabilityCampaigns - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
    **/
    listDomainDeliverabilityCampaigns(req: operations.ListDomainDeliverabilityCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainDeliverabilityCampaignsResponse>;
    /**
     * listEmailIdentities - Returns a list of all of the email identities that are associated with your AWS account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
    **/
    listEmailIdentities(req: operations.ListEmailIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEmailIdentitiesResponse>;
    /**
     * listEmailTemplates - <p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    listEmailTemplates(req: operations.ListEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListEmailTemplatesResponse>;
    /**
     * listSuppressedDestinations - Retrieves a list of email addresses that are on the suppression list for your account.
    **/
    listSuppressedDestinations(req: operations.ListSuppressedDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuppressedDestinationsResponse>;
    /**
     * listTagsForResource - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putAccountDedicatedIpWarmupAttributes - Enable or disable the automatic warm-up feature for dedicated IP addresses.
    **/
    putAccountDedicatedIpWarmupAttributes(req: operations.PutAccountDedicatedIpWarmupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountDedicatedIpWarmupAttributesResponse>;
    /**
     * putAccountDetails - Update your Amazon SES account details.
    **/
    putAccountDetails(req: operations.PutAccountDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountDetailsResponse>;
    /**
     * putAccountSendingAttributes - Enable or disable the ability of your account to send email.
    **/
    putAccountSendingAttributes(req: operations.PutAccountSendingAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountSendingAttributesResponse>;
    /**
     * putAccountSuppressionAttributes - Change the settings for the account-level suppression list.
    **/
    putAccountSuppressionAttributes(req: operations.PutAccountSuppressionAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountSuppressionAttributesResponse>;
    /**
     * putConfigurationSetDeliveryOptions - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
    **/
    putConfigurationSetDeliveryOptions(req: operations.PutConfigurationSetDeliveryOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetDeliveryOptionsResponse>;
    /**
     * putConfigurationSetReputationOptions - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
    **/
    putConfigurationSetReputationOptions(req: operations.PutConfigurationSetReputationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetReputationOptionsResponse>;
    /**
     * putConfigurationSetSendingOptions - Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
    **/
    putConfigurationSetSendingOptions(req: operations.PutConfigurationSetSendingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetSendingOptionsResponse>;
    /**
     * putConfigurationSetSuppressionOptions - Specify the account suppression list preferences for a configuration set.
    **/
    putConfigurationSetSuppressionOptions(req: operations.PutConfigurationSetSuppressionOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetSuppressionOptionsResponse>;
    /**
     * putConfigurationSetTrackingOptions - Specify a custom domain to use for open and click tracking elements in email that you send.
    **/
    putConfigurationSetTrackingOptions(req: operations.PutConfigurationSetTrackingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetTrackingOptionsResponse>;
    /**
     * putDedicatedIpInPool - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your AWS account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
    **/
    putDedicatedIpInPool(req: operations.PutDedicatedIpInPoolRequest, config?: AxiosRequestConfig): Promise<operations.PutDedicatedIpInPoolResponse>;
    /**
     * putDedicatedIpWarmupAttributes - <p/>
    **/
    putDedicatedIpWarmupAttributes(req: operations.PutDedicatedIpWarmupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutDedicatedIpWarmupAttributesResponse>;
    /**
     * putDeliverabilityDashboardOption - <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
    **/
    putDeliverabilityDashboardOption(req: operations.PutDeliverabilityDashboardOptionRequest, config?: AxiosRequestConfig): Promise<operations.PutDeliverabilityDashboardOptionResponse>;
    /**
     * putEmailIdentityConfigurationSetAttributes - Used to associate a configuration set with an email identity.
    **/
    putEmailIdentityConfigurationSetAttributes(req: operations.PutEmailIdentityConfigurationSetAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityConfigurationSetAttributesResponse>;
    /**
     * putEmailIdentityDkimAttributes - Used to enable or disable DKIM authentication for an email identity.
    **/
    putEmailIdentityDkimAttributes(req: operations.PutEmailIdentityDkimAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityDkimAttributesResponse>;
    /**
     * putEmailIdentityDkimSigningAttributes - <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
    **/
    putEmailIdentityDkimSigningAttributes(req: operations.PutEmailIdentityDkimSigningAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityDkimSigningAttributesResponse>;
    /**
     * putEmailIdentityFeedbackAttributes - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
    **/
    putEmailIdentityFeedbackAttributes(req: operations.PutEmailIdentityFeedbackAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityFeedbackAttributesResponse>;
    /**
     * putEmailIdentityMailFromAttributes - Used to enable or disable the custom Mail-From domain configuration for an email identity.
    **/
    putEmailIdentityMailFromAttributes(req: operations.PutEmailIdentityMailFromAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityMailFromAttributesResponse>;
    /**
     * putSuppressedDestination - Adds an email address to the suppression list for your account.
    **/
    putSuppressedDestination(req: operations.PutSuppressedDestinationRequest, config?: AxiosRequestConfig): Promise<operations.PutSuppressedDestinationResponse>;
    /**
     * sendBulkEmail - Composes an email message to multiple destinations.
    **/
    sendBulkEmail(req: operations.SendBulkEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendBulkEmailResponse>;
    /**
     * sendCustomVerificationEmail - <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    sendCustomVerificationEmail(req: operations.SendCustomVerificationEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendCustomVerificationEmailResponse>;
    /**
     * sendEmail - <p>Sends an email message. You can use the Amazon SES API v2 to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
    **/
    sendEmail(req: operations.SendEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendEmailResponse>;
    /**
     * tagResource - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testRenderEmailTemplate - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    testRenderEmailTemplate(req: operations.TestRenderEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.TestRenderEmailTemplateResponse>;
    /**
     * untagResource - Remove one or more tags (keys and values) from a specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateConfigurationSetEventDestination - <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
    **/
    updateConfigurationSetEventDestination(req: operations.UpdateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationSetEventDestinationResponse>;
    /**
     * updateContact - Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
    **/
    updateContact(req: operations.UpdateContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactResponse>;
    /**
     * updateContactList - Updates contact list metadata. This operation does a complete replacement.
    **/
    updateContactList(req: operations.UpdateContactListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactListResponse>;
    /**
     * updateCustomVerificationEmailTemplate - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    updateCustomVerificationEmailTemplate(req: operations.UpdateCustomVerificationEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomVerificationEmailTemplateResponse>;
    /**
     * updateEmailIdentityPolicy - <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    updateEmailIdentityPolicy(req: operations.UpdateEmailIdentityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailIdentityPolicyResponse>;
    /**
     * updateEmailTemplate - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
    **/
    updateEmailTemplate(req: operations.UpdateEmailTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailTemplateResponse>;
}
export {};
