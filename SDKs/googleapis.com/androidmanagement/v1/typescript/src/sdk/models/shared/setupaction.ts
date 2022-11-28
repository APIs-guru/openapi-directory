import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";
import { LaunchAppAction } from "./launchappaction";



// SetupAction
/** 
 * An action executed during setup.
**/
export class SetupAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=launchApp" })
  launchApp?: LaunchAppAction;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: UserFacingMessage;
}
