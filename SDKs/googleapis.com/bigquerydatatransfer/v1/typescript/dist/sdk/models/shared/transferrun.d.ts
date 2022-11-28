import { SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { Status } from "./status";
export declare enum TransferRunStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * Represents a data transfer run.
**/
export declare class TransferRun extends SpeakeasyBase {
    dataSourceId?: string;
    destinationDatasetId?: string;
    emailPreferences?: EmailPreferences;
    endTime?: string;
    errorStatus?: Status;
    name?: string;
    notificationPubsubTopic?: string;
    params?: Map<string, any>;
    runTime?: string;
    schedule?: string;
    scheduleTime?: string;
    startTime?: string;
    state?: TransferRunStateEnum;
    updateTime?: string;
    userId?: string;
}
