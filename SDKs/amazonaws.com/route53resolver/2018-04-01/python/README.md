# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateFirewallRuleGroupRequest(
    headers=operations.AssociateFirewallRuleGroupHeaders(
        x_amz_algorithm="aliquam",
        x_amz_content_sha256="quibusdam",
        x_amz_credential="laboriosam",
        x_amz_date="totam",
        x_amz_security_token="atque",
        x_amz_signature="corrupti",
        x_amz_signed_headers="quibusdam",
        x_amz_target="Route53Resolver.AssociateFirewallRuleGroup",
    ),
    request=shared.AssociateFirewallRuleGroupRequest(
        creator_request_id="placeat",
        firewall_rule_group_id="ut",
        mutation_protection="ENABLED",
        name="et",
        priority=7289028574483297393,
        tags=[
            shared.Tag(
                key="optio",
                value="autem",
            ),
        ],
        vpc_id="laudantium",
    ),
)
    
res = s.sdk.associate_firewall_rule_group(req)

if res.associate_firewall_rule_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_firewall_rule_group` - Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 
* `associate_resolver_endpoint_ip_address` - <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
* `associate_resolver_query_log_config` - <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
* `associate_resolver_rule` - Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 
* `create_firewall_domain_list` - Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 
* `create_firewall_rule` - Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
* `create_firewall_rule_group` - Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 
* `create_resolver_endpoint` - <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
* `create_resolver_query_log_config` - <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
* `create_resolver_rule` - For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
* `delete_firewall_domain_list` - Deletes the specified domain list. 
* `delete_firewall_rule` - Deletes the specified firewall rule.
* `delete_firewall_rule_group` - Deletes the specified firewall rule group. 
* `delete_resolver_endpoint` - <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
* `delete_resolver_query_log_config` - <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
* `delete_resolver_rule` - Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
* `disassociate_firewall_rule_group` - Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 
* `disassociate_resolver_endpoint_ip_address` - <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
* `disassociate_resolver_query_log_config` - <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
* `disassociate_resolver_rule` - <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
* `get_firewall_config` - Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* `get_firewall_domain_list` - Retrieves the specified firewall domain list.
* `get_firewall_rule_group` - Retrieves the specified firewall rule group. 
* `get_firewall_rule_group_association` - Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
* `get_firewall_rule_group_policy` - Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* `get_resolver_dnssec_config` - Gets DNSSEC validation information for a specified resource.
* `get_resolver_endpoint` - Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
* `get_resolver_query_log_config` - Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
* `get_resolver_query_log_config_association` - Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
* `get_resolver_query_log_config_policy` - Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
* `get_resolver_rule` - Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
* `get_resolver_rule_association` - Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 
* `get_resolver_rule_policy` - Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 
* `import_firewall_domains` - <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
* `list_firewall_configs` - <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
* `list_firewall_domain_lists` - <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
* `list_firewall_domains` - <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
* `list_firewall_rule_group_associations` - <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
* `list_firewall_rule_groups` - <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
* `list_firewall_rules` - <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
* `list_resolver_dnssec_configs` - Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
* `list_resolver_endpoint_ip_addresses` - Gets the IP addresses for a specified Resolver endpoint.
* `list_resolver_endpoints` - Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
* `list_resolver_query_log_config_associations` - Lists information about associations between Amazon VPCs and query logging configurations.
* `list_resolver_query_log_configs` - Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
* `list_resolver_rule_associations` - Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
* `list_resolver_rules` - Lists the Resolver rules that were created using the current Amazon Web Services account.
* `list_tags_for_resource` - Lists the tags that you associated with the specified resource.
* `put_firewall_rule_group_policy` - Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* `put_resolver_query_log_config_policy` - Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
* `put_resolver_rule_policy` - Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
* `tag_resource` - Adds one or more tags to a specified resource.
* `untag_resource` - Removes one or more tags from a specified resource.
* `update_firewall_config` - Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* `update_firewall_domains` - Updates the firewall domain list from an array of domain specifications. 
* `update_firewall_rule` - Updates the specified firewall rule. 
* `update_firewall_rule_group_association` - Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 
* `update_resolver_dnssec_config` - Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
* `update_resolver_endpoint` - Updates the name of an inbound or an outbound Resolver endpoint. 
* `update_resolver_rule` - Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
