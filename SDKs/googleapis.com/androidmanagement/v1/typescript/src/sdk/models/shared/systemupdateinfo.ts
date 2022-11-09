import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SystemUpdateInfoUpdateStatusEnum {
    UpdateStatusUnknown = "UPDATE_STATUS_UNKNOWN"
,    UpToDate = "UP_TO_DATE"
,    UnknownUpdateAvailable = "UNKNOWN_UPDATE_AVAILABLE"
,    SecurityUpdateAvailable = "SECURITY_UPDATE_AVAILABLE"
,    OsUpdateAvailable = "OS_UPDATE_AVAILABLE"
}


// SystemUpdateInfo
/** 
 * Information about a potential pending system update.
**/
export class SystemUpdateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateReceivedTime" })
  updateReceivedTime?: string;

  @Metadata({ data: "json, name=updateStatus" })
  updateStatus?: SystemUpdateInfoUpdateStatusEnum;
}
