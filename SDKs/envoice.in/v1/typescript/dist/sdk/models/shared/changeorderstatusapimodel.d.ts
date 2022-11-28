import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChangeOrderStatusApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class ChangeOrderStatusApiModel extends SpeakeasyBase {
    id?: number;
    reason?: string;
    status?: ChangeOrderStatusApiModelStatusEnum;
}
