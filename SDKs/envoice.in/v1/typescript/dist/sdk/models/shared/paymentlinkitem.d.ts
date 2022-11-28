import { SpeakeasyBase } from "../../../internal/utils";
import { Tax } from "./tax";
import { WorkType } from "./worktype";
export declare class PaymentLinkItem extends SpeakeasyBase {
    cost?: number;
    discountAmount?: number;
    discountPercentage?: number;
    id?: number;
    paymentLinkId?: number;
    quantity?: number;
    subTotalAmount?: number;
    tax?: Tax;
    taxAmount?: number;
    taxId?: number;
    taxPercentage?: number;
    totalAmount?: number;
    workType?: WorkType;
    workTypeId?: number;
}
