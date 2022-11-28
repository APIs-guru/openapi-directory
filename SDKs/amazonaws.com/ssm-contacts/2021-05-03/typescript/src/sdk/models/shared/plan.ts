import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stage } from "./stage";



// Plan
/** 
 * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
**/
export class Plan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Stages", elemType: Stage })
  stages: Stage[];
}
