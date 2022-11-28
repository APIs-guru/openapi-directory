import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimingInformation } from "./timinginformation";



// StartSessionResult
/** 
 * Contains the details of the started session.
**/
export class StartSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionToken" })
  sessionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
