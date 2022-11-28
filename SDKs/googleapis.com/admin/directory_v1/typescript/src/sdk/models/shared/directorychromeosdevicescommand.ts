import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryChromeosdevicesCommandResult } from "./directorychromeosdevicescommandresult";


export enum DirectoryChromeosdevicesCommandStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    SentToClient = "SENT_TO_CLIENT",
    AckedByClient = "ACKED_BY_CLIENT",
    ExecutedByClient = "EXECUTED_BY_CLIENT"
}

export enum DirectoryChromeosdevicesCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Reboot = "REBOOT",
    TakeAScreenshot = "TAKE_A_SCREENSHOT",
    SetVolume = "SET_VOLUME",
    WipeUsers = "WIPE_USERS",
    RemotePowerwash = "REMOTE_POWERWASH"
}


// DirectoryChromeosdevicesCommand
/** 
 * Information regarding a command that was issued to a device.
**/
export class DirectoryChromeosdevicesCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commandExpireTime" })
  commandExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=commandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=commandResult" })
  commandResult?: DirectoryChromeosdevicesCommandResult;

  @SpeakeasyMetadata({ data: "json, name=issueTime" })
  issueTime?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DirectoryChromeosdevicesCommandStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DirectoryChromeosdevicesCommandTypeEnum;
}
