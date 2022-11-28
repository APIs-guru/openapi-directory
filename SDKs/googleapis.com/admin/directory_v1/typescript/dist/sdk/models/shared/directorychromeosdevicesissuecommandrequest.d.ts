import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Reboot = "REBOOT",
    TakeAScreenshot = "TAKE_A_SCREENSHOT",
    SetVolume = "SET_VOLUME",
    WipeUsers = "WIPE_USERS",
    RemotePowerwash = "REMOTE_POWERWASH"
}
/**
 * A request for issuing a command.
**/
export declare class DirectoryChromeosdevicesIssueCommandRequest extends SpeakeasyBase {
    commandType?: DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;
    payload?: string;
}
