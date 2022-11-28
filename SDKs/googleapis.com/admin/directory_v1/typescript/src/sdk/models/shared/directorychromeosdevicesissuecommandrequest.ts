import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Reboot = "REBOOT",
    TakeAScreenshot = "TAKE_A_SCREENSHOT",
    SetVolume = "SET_VOLUME",
    WipeUsers = "WIPE_USERS",
    RemotePowerwash = "REMOTE_POWERWASH"
}


// DirectoryChromeosdevicesIssueCommandRequest
/** 
 * A request for issuing a command.
**/
export class DirectoryChromeosdevicesIssueCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commandType" })
  commandType?: DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}
