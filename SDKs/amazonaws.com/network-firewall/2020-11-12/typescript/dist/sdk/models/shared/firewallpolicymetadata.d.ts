import { SpeakeasyBase } from "../../../internal/utils";
/**
 * High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.
**/
export declare class FirewallPolicyMetadata extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
