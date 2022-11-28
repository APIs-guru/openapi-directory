import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SystemUpdateInfoUpdateStatusEnum {
    UpdateStatusUnknown = "UPDATE_STATUS_UNKNOWN",
    UpToDate = "UP_TO_DATE",
    UnknownUpdateAvailable = "UNKNOWN_UPDATE_AVAILABLE",
    SecurityUpdateAvailable = "SECURITY_UPDATE_AVAILABLE",
    OsUpdateAvailable = "OS_UPDATE_AVAILABLE"
}


// SystemUpdateInfo
/** 
 * Information about a potential pending system update.
**/
export class SystemUpdateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateReceivedTime" })
  updateReceivedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateStatus" })
  updateStatus?: SystemUpdateInfoUpdateStatusEnum;
}
