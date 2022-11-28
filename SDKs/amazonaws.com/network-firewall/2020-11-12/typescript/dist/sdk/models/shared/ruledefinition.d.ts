import { SpeakeasyBase } from "../../../internal/utils";
import { MatchAttributes } from "./matchattributes";
/**
 * The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
**/
export declare class RuleDefinition extends SpeakeasyBase {
    actions: string[];
    matchAttributes: MatchAttributes;
}
