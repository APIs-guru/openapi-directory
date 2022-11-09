import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserFacingMessage } from "./userfacingmessage";
import { UserFacingMessage } from "./userfacingmessage";


// TermsAndConditions
/** 
 * A terms and conditions page to be accepted during provisioning.
**/
export class TermsAndConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: UserFacingMessage;

  @Metadata({ data: "json, name=header" })
  header?: UserFacingMessage;
}
