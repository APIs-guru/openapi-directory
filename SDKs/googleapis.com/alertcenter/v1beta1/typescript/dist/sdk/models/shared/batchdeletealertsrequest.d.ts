import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to perform batch delete on alerts.
**/
export declare class BatchDeleteAlertsRequest extends SpeakeasyBase {
    alertId?: string[];
    customerId?: string;
}
