import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingAction } from "./findingaction";
import { FindingActor } from "./findingactor";


// PolicyDetails
/** 
 * Provides the details of a policy finding.
**/
export class PolicyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FindingAction;

  @Metadata({ data: "json, name=actor" })
  actor?: FindingActor;
}
