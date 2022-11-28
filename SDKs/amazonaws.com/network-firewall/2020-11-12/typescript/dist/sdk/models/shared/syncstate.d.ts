import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { PerObjectStatus } from "./perobjectstatus";
/**
 * <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, AWS Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>
**/
export declare class SyncState extends SpeakeasyBase {
    attachment?: Attachment;
    config?: Map<string, PerObjectStatus>;
}
