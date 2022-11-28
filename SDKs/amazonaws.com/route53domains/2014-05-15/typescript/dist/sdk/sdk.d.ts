import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://route53domains.{region}.amazonaws.com", "https://route53domains.{region}.amazonaws.com", "http://route53domains.{region}.amazonaws.com.cn", "https://route53domains.{region}.amazonaws.com.cn"];
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
     * acceptDomainTransferFromAnotherAwsAccount - <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
    **/
    acceptDomainTransferFromAnotherAwsAccount(req: operations.AcceptDomainTransferFromAnotherAwsAccountRequest, config?: AxiosRequestConfig): Promise<operations.AcceptDomainTransferFromAnotherAwsAccountResponse>;
    /**
     * cancelDomainTransferToAnotherAwsAccount - <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other AWS account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
    **/
    cancelDomainTransferToAnotherAwsAccount(req: operations.CancelDomainTransferToAnotherAwsAccountRequest, config?: AxiosRequestConfig): Promise<operations.CancelDomainTransferToAnotherAwsAccountResponse>;
    /**
     * checkDomainAvailability - This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
    **/
    checkDomainAvailability(req: operations.CheckDomainAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.CheckDomainAvailabilityResponse>;
    /**
     * checkDomainTransferability - Checks whether a domain name can be transferred to Amazon Route 53.
    **/
    checkDomainTransferability(req: operations.CheckDomainTransferabilityRequest, config?: AxiosRequestConfig): Promise<operations.CheckDomainTransferabilityResponse>;
    /**
     * deleteTagsForDomain - <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
    **/
    deleteTagsForDomain(req: operations.DeleteTagsForDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagsForDomainResponse>;
    /**
     * disableDomainAutoRenew - This operation disables automatic renewal of domain registration for the specified domain.
    **/
    disableDomainAutoRenew(req: operations.DisableDomainAutoRenewRequest, config?: AxiosRequestConfig): Promise<operations.DisableDomainAutoRenewResponse>;
    /**
     * disableDomainTransferLock - This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
    **/
    disableDomainTransferLock(req: operations.DisableDomainTransferLockRequest, config?: AxiosRequestConfig): Promise<operations.DisableDomainTransferLockResponse>;
    /**
     * enableDomainAutoRenew - <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
    **/
    enableDomainAutoRenew(req: operations.EnableDomainAutoRenewRequest, config?: AxiosRequestConfig): Promise<operations.EnableDomainAutoRenewResponse>;
    /**
     * enableDomainTransferLock - This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
    **/
    enableDomainTransferLock(req: operations.EnableDomainTransferLockRequest, config?: AxiosRequestConfig): Promise<operations.EnableDomainTransferLockResponse>;
    /**
     * getContactReachabilityStatus - <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
    **/
    getContactReachabilityStatus(req: operations.GetContactReachabilityStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetContactReachabilityStatusResponse>;
    /**
     * getDomainDetail - This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
    **/
    getDomainDetail(req: operations.GetDomainDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDetailResponse>;
    /**
     * getDomainSuggestions - The GetDomainSuggestions operation returns a list of suggested domain names.
    **/
    getDomainSuggestions(req: operations.GetDomainSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainSuggestionsResponse>;
    /**
     * getOperationDetail - This operation returns the current status of an operation that is not completed.
    **/
    getOperationDetail(req: operations.GetOperationDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationDetailResponse>;
    /**
     * listDomains - This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
    **/
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * listOperations - Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account.
    **/
    listOperations(req: operations.ListOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsResponse>;
    /**
     * listTagsForDomain - <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
    **/
    listTagsForDomain(req: operations.ListTagsForDomainRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForDomainResponse>;
    /**
     * registerDomain - <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your AWS account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
    **/
    registerDomain(req: operations.RegisterDomainRequest, config?: AxiosRequestConfig): Promise<operations.RegisterDomainResponse>;
    /**
     * rejectDomainTransferFromAnotherAwsAccount - <p>Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
    **/
    rejectDomainTransferFromAnotherAwsAccount(req: operations.RejectDomainTransferFromAnotherAwsAccountRequest, config?: AxiosRequestConfig): Promise<operations.RejectDomainTransferFromAnotherAwsAccountResponse>;
    /**
     * renewDomain - <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
    **/
    renewDomain(req: operations.RenewDomainRequest, config?: AxiosRequestConfig): Promise<operations.RenewDomainResponse>;
    /**
     * resendContactReachabilityEmail - For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
    **/
    resendContactReachabilityEmail(req: operations.ResendContactReachabilityEmailRequest, config?: AxiosRequestConfig): Promise<operations.ResendContactReachabilityEmailResponse>;
    /**
     * retrieveDomainAuthCode - This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
    **/
    retrieveDomainAuthCode(req: operations.RetrieveDomainAuthCodeRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveDomainAuthCodeResponse>;
    /**
     * transferDomain - <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one AWS account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
    **/
    transferDomain(req: operations.TransferDomainRequest, config?: AxiosRequestConfig): Promise<operations.TransferDomainResponse>;
    /**
     * transferDomainToAnotherAwsAccount - <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p> <ul> <li> <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
    **/
    transferDomainToAnotherAwsAccount(req: operations.TransferDomainToAnotherAwsAccountRequest, config?: AxiosRequestConfig): Promise<operations.TransferDomainToAnotherAwsAccountResponse>;
    /**
     * updateDomainContact - <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
    **/
    updateDomainContact(req: operations.UpdateDomainContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainContactResponse>;
    /**
     * updateDomainContactPrivacy - <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
    **/
    updateDomainContactPrivacy(req: operations.UpdateDomainContactPrivacyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainContactPrivacyResponse>;
    /**
     * updateDomainNameservers - <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
    **/
    updateDomainNameservers(req: operations.UpdateDomainNameserversRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainNameserversResponse>;
    /**
     * updateTagsForDomain - <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
    **/
    updateTagsForDomain(req: operations.UpdateTagsForDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagsForDomainResponse>;
    /**
     * viewBilling - Returns all the domain-related billing records for the current AWS account for a specified period
    **/
    viewBilling(req: operations.ViewBillingRequest, config?: AxiosRequestConfig): Promise<operations.ViewBillingResponse>;
}
export {};
