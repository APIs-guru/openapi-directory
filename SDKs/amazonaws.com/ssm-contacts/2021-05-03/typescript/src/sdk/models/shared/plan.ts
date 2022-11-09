import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stage } from "./stage";


// Plan
/** 
 * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
**/
export class Plan extends SpeakeasyBase {
  @Metadata({ data: "json, name=Stages", elemType: shared.Stage })
  stages: Stage[];
}
