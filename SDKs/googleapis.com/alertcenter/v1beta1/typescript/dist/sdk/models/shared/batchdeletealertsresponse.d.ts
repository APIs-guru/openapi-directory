import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response to batch delete operation on alerts.
**/
export declare class BatchDeleteAlertsResponse extends SpeakeasyBase {
    failedAlertStatus?: Map<string, Status>;
    successAlertIds?: string[];
}
