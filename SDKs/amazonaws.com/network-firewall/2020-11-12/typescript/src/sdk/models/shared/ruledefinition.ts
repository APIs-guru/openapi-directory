import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchAttributes } from "./matchattributes";



// RuleDefinition
/** 
 * The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
**/
export class RuleDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions: string[];

  @SpeakeasyMetadata({ data: "json, name=MatchAttributes" })
  matchAttributes: MatchAttributes;
}
