import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";



// TermsAndConditions
/** 
 * A terms and conditions page to be accepted during provisioning.
**/
export class TermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: UserFacingMessage;
}
