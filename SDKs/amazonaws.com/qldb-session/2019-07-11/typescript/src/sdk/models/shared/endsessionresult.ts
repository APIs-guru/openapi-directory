import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimingInformation } from "./timinginformation";



// EndSessionResult
/** 
 * Contains the details of the ended session.
**/
export class EndSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
