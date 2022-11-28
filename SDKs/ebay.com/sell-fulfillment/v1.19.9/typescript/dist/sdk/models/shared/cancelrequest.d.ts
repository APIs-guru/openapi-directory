import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about a buyer request to cancel an order.
**/
export declare class CancelRequest extends SpeakeasyBase {
    cancelCompletedDate?: string;
    cancelInitiator?: string;
    cancelReason?: string;
    cancelRequestId?: string;
    cancelRequestState?: string;
    cancelRequestedDate?: string;
}
