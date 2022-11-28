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
    
req = operations.AssociateFirewallPolicyRequest(
    headers=operations.AssociateFirewallPolicyHeaders(
        x_amz_algorithm="ipsa",
        x_amz_content_sha256="est",
        x_amz_credential="autem",
        x_amz_date="magni",
        x_amz_security_token="recusandae",
        x_amz_signature="et",
        x_amz_signed_headers="dolorem",
        x_amz_target="NetworkFirewall_20201112.AssociateFirewallPolicy",
    ),
    request=shared.AssociateFirewallPolicyRequest(
        firewall_arn="minus",
        firewall_name="inventore",
        firewall_policy_arn="est",
        update_token="dolor",
    ),
)
    
res = s.sdk.associate_firewall_policy(req)

if res.associate_firewall_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_firewall_policy` - <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
* `associate_subnets` - <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
* `create_firewall` - <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
* `create_firewall_policy` - <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
* `create_rule_group` - <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
* `delete_firewall` - <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
* `delete_firewall_policy` - Deletes the specified <a>FirewallPolicy</a>. 
* `delete_resource_policy` - Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* `delete_rule_group` - Deletes the specified <a>RuleGroup</a>. 
* `describe_firewall` - Returns the data objects for the specified firewall. 
* `describe_firewall_policy` - Returns the data objects for the specified firewall policy. 
* `describe_logging_configuration` - Returns the logging configuration for the specified firewall. 
* `describe_resource_policy` - Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* `describe_rule_group` - Returns the data objects for the specified rule group. 
* `disassociate_subnets` - Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 
* `list_firewall_policies` - Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 
* `list_firewalls` - <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
* `list_rule_groups` - Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 
* `list_tags_for_resource` - <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
* `put_resource_policy` - <p>Creates or updates an AWS Identity and Access Management policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the AWS Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">AWS Resource Access Manager User Guide</a>.</p>
* `tag_resource` - <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
* `untag_resource` - <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can manage tags for the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
* `update_firewall_delete_protection` - Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 
* `update_firewall_description` - Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 
* `update_firewall_policy` - Updates the properties of the specified firewall policy.
* `update_firewall_policy_change_protection` - <p/>
* `update_logging_configuration` - <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
* `update_rule_group` - <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
* `update_subnet_change_protection` - <p/>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
