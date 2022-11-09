import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserFacingMessage } from "./userfacingmessage";
import { LaunchAppAction } from "./launchappaction";
import { UserFacingMessage } from "./userfacingmessage";


// SetupAction
/** 
 * An action executed during setup.
**/
export class SetupAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: UserFacingMessage;

  @Metadata({ data: "json, name=launchApp" })
  launchApp?: LaunchAppAction;

  @Metadata({ data: "json, name=title" })
  title?: UserFacingMessage;
}
