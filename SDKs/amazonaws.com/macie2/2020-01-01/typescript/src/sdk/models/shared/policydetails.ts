import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingAction } from "./findingaction";
import { FindingActor } from "./findingactor";



// PolicyDetails
/** 
 * Provides the details of a policy finding.
**/
export class PolicyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FindingAction;

  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: FindingActor;
}
