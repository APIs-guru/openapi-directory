import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsageLogEnabledLogTypesEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}

export enum UsageLogUploadOnCellularAllowedEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}


// UsageLog
/** 
 * Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
**/
export class UsageLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledLogTypes" })
  enabledLogTypes?: UsageLogEnabledLogTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=uploadOnCellularAllowed" })
  uploadOnCellularAllowed?: UsageLogUploadOnCellularAllowedEnum[];
}
