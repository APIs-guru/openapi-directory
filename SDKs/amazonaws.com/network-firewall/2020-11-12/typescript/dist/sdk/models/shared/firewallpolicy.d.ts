import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleGroupReference } from "./statefulrulegroupreference";
import { CustomAction } from "./customaction";
import { StatelessRuleGroupReference } from "./statelessrulegroupreference";
/**
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
**/
export declare class FirewallPolicy extends SpeakeasyBase {
    statefulRuleGroupReferences?: StatefulRuleGroupReference[];
    statelessCustomActions?: CustomAction[];
    statelessDefaultActions: string[];
    statelessFragmentDefaultActions: string[];
    statelessRuleGroupReferences?: StatelessRuleGroupReference[];
}
