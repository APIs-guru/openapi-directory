import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryChromeosdevicesCommandResult } from "./directorychromeosdevicescommandresult";
export declare enum DirectoryChromeosdevicesCommandStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    SentToClient = "SENT_TO_CLIENT",
    AckedByClient = "ACKED_BY_CLIENT",
    ExecutedByClient = "EXECUTED_BY_CLIENT"
}
export declare enum DirectoryChromeosdevicesCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Reboot = "REBOOT",
    TakeAScreenshot = "TAKE_A_SCREENSHOT",
    SetVolume = "SET_VOLUME",
    WipeUsers = "WIPE_USERS",
    RemotePowerwash = "REMOTE_POWERWASH"
}
/**
 * Information regarding a command that was issued to a device.
**/
export declare class DirectoryChromeosdevicesCommand extends SpeakeasyBase {
    commandExpireTime?: string;
    commandId?: string;
    commandResult?: DirectoryChromeosdevicesCommandResult;
    issueTime?: string;
    payload?: string;
    state?: DirectoryChromeosdevicesCommandStateEnum;
    type?: DirectoryChromeosdevicesCommandTypeEnum;
}
