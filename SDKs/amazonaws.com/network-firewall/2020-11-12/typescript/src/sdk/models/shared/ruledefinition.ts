import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchAttributes } from "./matchattributes";


// RuleDefinition
/** 
 * The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
**/
export class RuleDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: string[];

  @Metadata({ data: "json, name=MatchAttributes" })
  matchAttributes: MatchAttributes;
}
