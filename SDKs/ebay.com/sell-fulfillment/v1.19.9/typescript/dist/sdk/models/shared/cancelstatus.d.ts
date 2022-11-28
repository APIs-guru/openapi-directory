import { SpeakeasyBase } from "../../../internal/utils";
import { CancelRequest } from "./cancelrequest";
/**
 * This type contains information about any requests that have been made to cancel an order.
**/
export declare class CancelStatus extends SpeakeasyBase {
    cancelRequests?: CancelRequest[];
    cancelState?: string;
    cancelledDate?: string;
}
