import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";


// StartSessionResult
/** 
 * Contains the details of the started session.
**/
export class StartSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionToken" })
  sessionToken?: string;

  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
