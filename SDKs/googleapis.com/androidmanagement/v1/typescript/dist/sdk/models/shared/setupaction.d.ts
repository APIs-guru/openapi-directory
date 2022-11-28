import { SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";
import { LaunchAppAction } from "./launchappaction";
/**
 * An action executed during setup.
**/
export declare class SetupAction extends SpeakeasyBase {
    description?: UserFacingMessage;
    launchApp?: LaunchAppAction;
    title?: UserFacingMessage;
}
