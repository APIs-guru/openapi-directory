import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



// Stage
/** 
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
**/
export class Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInMinutes" })
  durationInMinutes: number;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets: Target[];
}
