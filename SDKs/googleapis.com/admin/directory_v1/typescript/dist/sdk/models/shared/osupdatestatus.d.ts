import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OsUpdateStatusStateEnum {
    UpdateStateUnspecified = "updateStateUnspecified",
    UpdateStateNotStarted = "updateStateNotStarted",
    UpdateStateDownloadInProgress = "updateStateDownloadInProgress",
    UpdateStateNeedReboot = "updateStateNeedReboot"
}
/**
 * Contains information regarding the current OS update status.
**/
export declare class OsUpdateStatus extends SpeakeasyBase {
    rebootTime?: string;
    state?: OsUpdateStatusStateEnum;
    targetKioskAppVersion?: string;
    targetOsVersion?: string;
    updateCheckTime?: string;
    updateTime?: string;
}
