import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://route53resolver.{region}.amazonaws.com", "https://route53resolver.{region}.amazonaws.com", "http://route53resolver.{region}.amazonaws.com.cn", "https://route53resolver.{region}.amazonaws.com.cn"];
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
     * associateFirewallRuleGroup - Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC.
    **/
    associateFirewallRuleGroup(req: operations.AssociateFirewallRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFirewallRuleGroupResponse>;
    /**
     * associateResolverEndpointIpAddress - <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
    **/
    associateResolverEndpointIpAddress(req: operations.AssociateResolverEndpointIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResolverEndpointIpAddressResponse>;
    /**
     * associateResolverQueryLogConfig - <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
    **/
    associateResolverQueryLogConfig(req: operations.AssociateResolverQueryLogConfigRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResolverQueryLogConfigResponse>;
    /**
     * associateResolverRule - Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>.
    **/
    associateResolverRule(req: operations.AssociateResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResolverRuleResponse>;
    /**
     * createFirewallDomainList - Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>.
    **/
    createFirewallDomainList(req: operations.CreateFirewallDomainListRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallDomainListResponse>;
    /**
     * createFirewallRule - Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
    **/
    createFirewallRule(req: operations.CreateFirewallRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallRuleResponse>;
    /**
     * createFirewallRuleGroup - Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>.
    **/
    createFirewallRuleGroup(req: operations.CreateFirewallRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallRuleGroupResponse>;
    /**
     * createResolverEndpoint - <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
    **/
    createResolverEndpoint(req: operations.CreateResolverEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateResolverEndpointResponse>;
    /**
     * createResolverQueryLogConfig - <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
    **/
    createResolverQueryLogConfig(req: operations.CreateResolverQueryLogConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateResolverQueryLogConfigResponse>;
    /**
     * createResolverRule - For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
    **/
    createResolverRule(req: operations.CreateResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateResolverRuleResponse>;
    /**
     * deleteFirewallDomainList - Deletes the specified domain list.
    **/
    deleteFirewallDomainList(req: operations.DeleteFirewallDomainListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallDomainListResponse>;
    /**
     * deleteFirewallRule - Deletes the specified firewall rule.
    **/
    deleteFirewallRule(req: operations.DeleteFirewallRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallRuleResponse>;
    /**
     * deleteFirewallRuleGroup - Deletes the specified firewall rule group.
    **/
    deleteFirewallRuleGroup(req: operations.DeleteFirewallRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallRuleGroupResponse>;
    /**
     * deleteResolverEndpoint - <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
    **/
    deleteResolverEndpoint(req: operations.DeleteResolverEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResolverEndpointResponse>;
    /**
     * deleteResolverQueryLogConfig - <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
    **/
    deleteResolverQueryLogConfig(req: operations.DeleteResolverQueryLogConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResolverQueryLogConfigResponse>;
    /**
     * deleteResolverRule - Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
    **/
    deleteResolverRule(req: operations.DeleteResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResolverRuleResponse>;
    /**
     * disassociateFirewallRuleGroup - Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC.
    **/
    disassociateFirewallRuleGroup(req: operations.DisassociateFirewallRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFirewallRuleGroupResponse>;
    /**
     * disassociateResolverEndpointIpAddress - <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
    **/
    disassociateResolverEndpointIpAddress(req: operations.DisassociateResolverEndpointIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResolverEndpointIpAddressResponse>;
    /**
     * disassociateResolverQueryLogConfig - <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
    **/
    disassociateResolverQueryLogConfig(req: operations.DisassociateResolverQueryLogConfigRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResolverQueryLogConfigResponse>;
    /**
     * disassociateResolverRule - <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
    **/
    disassociateResolverRule(req: operations.DisassociateResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResolverRuleResponse>;
    /**
     * getFirewallConfig - Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
    **/
    getFirewallConfig(req: operations.GetFirewallConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallConfigResponse>;
    /**
     * getFirewallDomainList - Retrieves the specified firewall domain list.
    **/
    getFirewallDomainList(req: operations.GetFirewallDomainListRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallDomainListResponse>;
    /**
     * getFirewallRuleGroup - Retrieves the specified firewall rule group.
    **/
    getFirewallRuleGroup(req: operations.GetFirewallRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallRuleGroupResponse>;
    /**
     * getFirewallRuleGroupAssociation - Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
    **/
    getFirewallRuleGroupAssociation(req: operations.GetFirewallRuleGroupAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallRuleGroupAssociationResponse>;
    /**
     * getFirewallRuleGroupPolicy - Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).
    **/
    getFirewallRuleGroupPolicy(req: operations.GetFirewallRuleGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallRuleGroupPolicyResponse>;
    /**
     * getResolverDnssecConfig - Gets DNSSEC validation information for a specified resource.
    **/
    getResolverDnssecConfig(req: operations.GetResolverDnssecConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverDnssecConfigResponse>;
    /**
     * getResolverEndpoint - Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
    **/
    getResolverEndpoint(req: operations.GetResolverEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverEndpointResponse>;
    /**
     * getResolverQueryLogConfig - Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to.
    **/
    getResolverQueryLogConfig(req: operations.GetResolverQueryLogConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverQueryLogConfigResponse>;
    /**
     * getResolverQueryLogConfigAssociation - Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
    **/
    getResolverQueryLogConfigAssociation(req: operations.GetResolverQueryLogConfigAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverQueryLogConfigAssociationResponse>;
    /**
     * getResolverQueryLogConfigPolicy - Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
    **/
    getResolverQueryLogConfigPolicy(req: operations.GetResolverQueryLogConfigPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverQueryLogConfigPolicyResponse>;
    /**
     * getResolverRule - Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
    **/
    getResolverRule(req: operations.GetResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverRuleResponse>;
    /**
     * getResolverRuleAssociation - Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>.
    **/
    getResolverRuleAssociation(req: operations.GetResolverRuleAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverRuleAssociationResponse>;
    /**
     * getResolverRulePolicy - Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use.
    **/
    getResolverRulePolicy(req: operations.GetResolverRulePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverRulePolicyResponse>;
    /**
     * importFirewallDomains - <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
    **/
    importFirewallDomains(req: operations.ImportFirewallDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ImportFirewallDomainsResponse>;
    /**
     * listFirewallConfigs - <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallConfigs(req: operations.ListFirewallConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallConfigsResponse>;
    /**
     * listFirewallDomainLists - <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallDomainLists(req: operations.ListFirewallDomainListsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallDomainListsResponse>;
    /**
     * listFirewallDomains - <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallDomains(req: operations.ListFirewallDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallDomainsResponse>;
    /**
     * listFirewallRuleGroupAssociations - <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallRuleGroupAssociations(req: operations.ListFirewallRuleGroupAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallRuleGroupAssociationsResponse>;
    /**
     * listFirewallRuleGroups - <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallRuleGroups(req: operations.ListFirewallRuleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallRuleGroupsResponse>;
    /**
     * listFirewallRules - <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
    **/
    listFirewallRules(req: operations.ListFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallRulesResponse>;
    /**
     * listResolverDnssecConfigs - Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
    **/
    listResolverDnssecConfigs(req: operations.ListResolverDnssecConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverDnssecConfigsResponse>;
    /**
     * listResolverEndpointIpAddresses - Gets the IP addresses for a specified Resolver endpoint.
    **/
    listResolverEndpointIpAddresses(req: operations.ListResolverEndpointIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverEndpointIpAddressesResponse>;
    /**
     * listResolverEndpoints - Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
    **/
    listResolverEndpoints(req: operations.ListResolverEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverEndpointsResponse>;
    /**
     * listResolverQueryLogConfigAssociations - Lists information about associations between Amazon VPCs and query logging configurations.
    **/
    listResolverQueryLogConfigAssociations(req: operations.ListResolverQueryLogConfigAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverQueryLogConfigAssociationsResponse>;
    /**
     * listResolverQueryLogConfigs - Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
    **/
    listResolverQueryLogConfigs(req: operations.ListResolverQueryLogConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverQueryLogConfigsResponse>;
    /**
     * listResolverRuleAssociations - Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
    **/
    listResolverRuleAssociations(req: operations.ListResolverRuleAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverRuleAssociationsResponse>;
    /**
     * listResolverRules - Lists the Resolver rules that were created using the current Amazon Web Services account.
    **/
    listResolverRules(req: operations.ListResolverRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListResolverRulesResponse>;
    /**
     * listTagsForResource - Lists the tags that you associated with the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putFirewallRuleGroupPolicy - Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).
    **/
    putFirewallRuleGroupPolicy(req: operations.PutFirewallRuleGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutFirewallRuleGroupPolicyResponse>;
    /**
     * putResolverQueryLogConfigPolicy - Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
    **/
    putResolverQueryLogConfigPolicy(req: operations.PutResolverQueryLogConfigPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResolverQueryLogConfigPolicyResponse>;
    /**
     * putResolverRulePolicy - Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
    **/
    putResolverRulePolicy(req: operations.PutResolverRulePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResolverRulePolicyResponse>;
    /**
     * tagResource - Adds one or more tags to a specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from a specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateFirewallConfig - Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
    **/
    updateFirewallConfig(req: operations.UpdateFirewallConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallConfigResponse>;
    /**
     * updateFirewallDomains - Updates the firewall domain list from an array of domain specifications.
    **/
    updateFirewallDomains(req: operations.UpdateFirewallDomainsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallDomainsResponse>;
    /**
     * updateFirewallRule - Updates the specified firewall rule.
    **/
    updateFirewallRule(req: operations.UpdateFirewallRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallRuleResponse>;
    /**
     * updateFirewallRuleGroupAssociation - Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC.
    **/
    updateFirewallRuleGroupAssociation(req: operations.UpdateFirewallRuleGroupAssociationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallRuleGroupAssociationResponse>;
    /**
     * updateResolverDnssecConfig - Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
    **/
    updateResolverDnssecConfig(req: operations.UpdateResolverDnssecConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResolverDnssecConfigResponse>;
    /**
     * updateResolverEndpoint - Updates the name of an inbound or an outbound Resolver endpoint.
    **/
    updateResolverEndpoint(req: operations.UpdateResolverEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResolverEndpointResponse>;
    /**
     * updateResolverRule - Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
    **/
    updateResolverRule(req: operations.UpdateResolverRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResolverRuleResponse>;
}
export {};
