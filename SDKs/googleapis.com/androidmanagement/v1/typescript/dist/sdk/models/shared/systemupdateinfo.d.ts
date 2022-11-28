import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SystemUpdateInfoUpdateStatusEnum {
    UpdateStatusUnknown = "UPDATE_STATUS_UNKNOWN",
    UpToDate = "UP_TO_DATE",
    UnknownUpdateAvailable = "UNKNOWN_UPDATE_AVAILABLE",
    SecurityUpdateAvailable = "SECURITY_UPDATE_AVAILABLE",
    OsUpdateAvailable = "OS_UPDATE_AVAILABLE"
}
/**
 * Information about a potential pending system update.
**/
export declare class SystemUpdateInfo extends SpeakeasyBase {
    updateReceivedTime?: string;
    updateStatus?: SystemUpdateInfoUpdateStatusEnum;
}
