import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OsUpdateStatusStateEnum {
    UpdateStateUnspecified = "updateStateUnspecified",
    UpdateStateNotStarted = "updateStateNotStarted",
    UpdateStateDownloadInProgress = "updateStateDownloadInProgress",
    UpdateStateNeedReboot = "updateStateNeedReboot"
}


// OsUpdateStatus
/** 
 * Contains information regarding the current OS update status.
**/
export class OsUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rebootTime" })
  rebootTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: OsUpdateStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=targetKioskAppVersion" })
  targetKioskAppVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetOsVersion" })
  targetOsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=updateCheckTime" })
  updateCheckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
