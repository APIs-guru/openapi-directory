import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OsUpdateStatusStateEnum {
    UpdateStateUnspecified = "updateStateUnspecified"
,    UpdateStateNotStarted = "updateStateNotStarted"
,    UpdateStateDownloadInProgress = "updateStateDownloadInProgress"
,    UpdateStateNeedReboot = "updateStateNeedReboot"
}


// OsUpdateStatus
/** 
 * Contains information regarding the current OS update status.
**/
export class OsUpdateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=rebootTime" })
  rebootTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: OsUpdateStatusStateEnum;

  @Metadata({ data: "json, name=targetKioskAppVersion" })
  targetKioskAppVersion?: string;

  @Metadata({ data: "json, name=targetOsVersion" })
  targetOsVersion?: string;

  @Metadata({ data: "json, name=updateCheckTime" })
  updateCheckTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
