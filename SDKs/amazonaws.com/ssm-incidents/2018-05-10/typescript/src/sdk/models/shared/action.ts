import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SsmAutomation } from "./ssmautomation";


// Action
/** 
 * The action that starts at the beginning of an incident. The response plan defines the action.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssmAutomation" })
  ssmAutomation?: SsmAutomation;
}
