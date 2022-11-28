import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://network-firewall.{region}.amazonaws.com", "https://network-firewall.{region}.amazonaws.com", "http://network-firewall.{region}.amazonaws.com.cn", "https://network-firewall.{region}.amazonaws.com.cn"];
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
     * associateFirewallPolicy - <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
    **/
    associateFirewallPolicy(req: operations.AssociateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFirewallPolicyResponse>;
    /**
     * associateSubnets - <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
    **/
    associateSubnets(req: operations.AssociateSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateSubnetsResponse>;
    /**
     * createFirewall - <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
    **/
    createFirewall(req: operations.CreateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallResponse>;
    /**
     * createFirewallPolicy - <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
    **/
    createFirewallPolicy(req: operations.CreateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallPolicyResponse>;
    /**
     * createRuleGroup - <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
    **/
    createRuleGroup(req: operations.CreateRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleGroupResponse>;
    /**
     * deleteFirewall - <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
    **/
    deleteFirewall(req: operations.DeleteFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallResponse>;
    /**
     * deleteFirewallPolicy - Deletes the specified <a>FirewallPolicy</a>.
    **/
    deleteFirewallPolicy(req: operations.DeleteFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallPolicyResponse>;
    /**
     * deleteResourcePolicy - Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteRuleGroup - Deletes the specified <a>RuleGroup</a>.
    **/
    deleteRuleGroup(req: operations.DeleteRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleGroupResponse>;
    /**
     * describeFirewall - Returns the data objects for the specified firewall.
    **/
    describeFirewall(req: operations.DescribeFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFirewallResponse>;
    /**
     * describeFirewallPolicy - Returns the data objects for the specified firewall policy.
    **/
    describeFirewallPolicy(req: operations.DescribeFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFirewallPolicyResponse>;
    /**
     * describeLoggingConfiguration - Returns the logging configuration for the specified firewall.
    **/
    describeLoggingConfiguration(req: operations.DescribeLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingConfigurationResponse>;
    /**
     * describeResourcePolicy - Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request.
    **/
    describeResourcePolicy(req: operations.DescribeResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourcePolicyResponse>;
    /**
     * describeRuleGroup - Returns the data objects for the specified rule group.
    **/
    describeRuleGroup(req: operations.DescribeRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuleGroupResponse>;
    /**
     * disassociateSubnets - Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.
    **/
    disassociateSubnets(req: operations.DisassociateSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateSubnetsResponse>;
    /**
     * listFirewallPolicies - Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.
    **/
    listFirewallPolicies(req: operations.ListFirewallPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallPoliciesResponse>;
    /**
     * listFirewalls - <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
    **/
    listFirewalls(req: operations.ListFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallsResponse>;
    /**
     * listRuleGroups - Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.
    **/
    listRuleGroups(req: operations.ListRuleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListRuleGroupsResponse>;
    /**
     * listTagsForResource - <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putResourcePolicy - <p>Creates or updates an AWS Identity and Access Management policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the AWS Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">AWS Resource Access Manager User Guide</a>.</p>
    **/
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * tagResource - <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can manage tags for the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups. </p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateFirewallDeleteProtection - Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.
    **/
    updateFirewallDeleteProtection(req: operations.UpdateFirewallDeleteProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallDeleteProtectionResponse>;
    /**
     * updateFirewallDescription - Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.
    **/
    updateFirewallDescription(req: operations.UpdateFirewallDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallDescriptionResponse>;
    /**
     * updateFirewallPolicy - Updates the properties of the specified firewall policy.
    **/
    updateFirewallPolicy(req: operations.UpdateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallPolicyResponse>;
    /**
     * updateFirewallPolicyChangeProtection - <p/>
    **/
    updateFirewallPolicyChangeProtection(req: operations.UpdateFirewallPolicyChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallPolicyChangeProtectionResponse>;
    /**
     * updateLoggingConfiguration - <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
    **/
    updateLoggingConfiguration(req: operations.UpdateLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoggingConfigurationResponse>;
    /**
     * updateRuleGroup - <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
    **/
    updateRuleGroup(req: operations.UpdateRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleGroupResponse>;
    /**
     * updateSubnetChangeProtection - <p/>
    **/
    updateSubnetChangeProtection(req: operations.UpdateSubnetChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubnetChangeProtectionResponse>;
}
export {};
