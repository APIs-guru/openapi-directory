import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageLogEnabledLogTypesEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}
export declare enum UsageLogUploadOnCellularAllowedEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}
/**
 * Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
**/
export declare class UsageLog extends SpeakeasyBase {
    enabledLogTypes?: UsageLogEnabledLogTypesEnum[];
    uploadOnCellularAllowed?: UsageLogUploadOnCellularAllowedEnum[];
}
