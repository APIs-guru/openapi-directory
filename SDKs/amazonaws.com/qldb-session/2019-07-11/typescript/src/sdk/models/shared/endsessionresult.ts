import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";


// EndSessionResult
/** 
 * Contains the details of the ended session.
**/
export class EndSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
