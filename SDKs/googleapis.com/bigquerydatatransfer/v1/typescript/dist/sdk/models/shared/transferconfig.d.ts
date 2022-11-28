import { SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { UserInfo } from "./userinfo";
import { ScheduleOptions } from "./scheduleoptions";
export declare enum TransferConfigStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
export declare class TransferConfigInput extends SpeakeasyBase {
    dataRefreshWindowDays?: number;
    dataSourceId?: string;
    destinationDatasetId?: string;
    disabled?: boolean;
    displayName?: string;
    emailPreferences?: EmailPreferences;
    name?: string;
    notificationPubsubTopic?: string;
    ownerInfo?: UserInfo;
    params?: Map<string, any>;
    schedule?: string;
    scheduleOptions?: ScheduleOptions;
    userId?: string;
}
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
export declare class TransferConfig extends SpeakeasyBase {
    dataRefreshWindowDays?: number;
    dataSourceId?: string;
    datasetRegion?: string;
    destinationDatasetId?: string;
    disabled?: boolean;
    displayName?: string;
    emailPreferences?: EmailPreferences;
    name?: string;
    nextRunTime?: string;
    notificationPubsubTopic?: string;
    ownerInfo?: UserInfo;
    params?: Map<string, any>;
    schedule?: string;
    scheduleOptions?: ScheduleOptions;
    state?: TransferConfigStateEnum;
    updateTime?: string;
    userId?: string;
}
