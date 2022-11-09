import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A request to perform batch undelete on alerts.
**/
export declare class BatchUndeleteAlertsRequest extends SpeakeasyBase {
    alertId?: string[];
    customerId?: string;
}
