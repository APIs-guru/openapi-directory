import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to perform batch undelete on alerts.
**/
export declare class BatchUndeleteAlertsRequest extends SpeakeasyBase {
    alertId?: string[];
    customerId?: string;
}
