import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Target } from "./target";


// Stage
/** 
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
**/
export class Stage extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInMinutes" })
  durationInMinutes: number;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets: Target[];
}
