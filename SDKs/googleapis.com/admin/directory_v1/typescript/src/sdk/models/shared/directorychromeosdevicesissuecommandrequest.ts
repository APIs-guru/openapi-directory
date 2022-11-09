import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED"
,    Reboot = "REBOOT"
,    TakeAScreenshot = "TAKE_A_SCREENSHOT"
,    SetVolume = "SET_VOLUME"
,    WipeUsers = "WIPE_USERS"
,    RemotePowerwash = "REMOTE_POWERWASH"
}


// DirectoryChromeosdevicesIssueCommandRequest
/** 
 * A request for issuing a command.
**/
export class DirectoryChromeosdevicesIssueCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=commandType" })
  commandType?: DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;

  @Metadata({ data: "json, name=payload" })
  payload?: string;
}
