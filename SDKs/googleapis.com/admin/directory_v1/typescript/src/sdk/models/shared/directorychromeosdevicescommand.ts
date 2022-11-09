import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryChromeosdevicesCommandResult } from "./directorychromeosdevicescommandresult";

export enum DirectoryChromeosdevicesCommandStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Expired = "EXPIRED"
,    Cancelled = "CANCELLED"
,    SentToClient = "SENT_TO_CLIENT"
,    AckedByClient = "ACKED_BY_CLIENT"
,    ExecutedByClient = "EXECUTED_BY_CLIENT"
}

export enum DirectoryChromeosdevicesCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED"
,    Reboot = "REBOOT"
,    TakeAScreenshot = "TAKE_A_SCREENSHOT"
,    SetVolume = "SET_VOLUME"
,    WipeUsers = "WIPE_USERS"
,    RemotePowerwash = "REMOTE_POWERWASH"
}


// DirectoryChromeosdevicesCommand
/** 
 * Information regarding a command that was issued to a device.
**/
export class DirectoryChromeosdevicesCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=commandExpireTime" })
  commandExpireTime?: string;

  @Metadata({ data: "json, name=commandId" })
  commandId?: string;

  @Metadata({ data: "json, name=commandResult" })
  commandResult?: DirectoryChromeosdevicesCommandResult;

  @Metadata({ data: "json, name=issueTime" })
  issueTime?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=state" })
  state?: DirectoryChromeosdevicesCommandStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: DirectoryChromeosdevicesCommandTypeEnum;
}
