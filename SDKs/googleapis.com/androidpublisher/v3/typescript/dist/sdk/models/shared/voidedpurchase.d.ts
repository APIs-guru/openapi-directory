import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
export declare class VoidedPurchase extends SpeakeasyBase {
    kind?: string;
    orderId?: string;
    purchaseTimeMillis?: string;
    purchaseToken?: string;
    voidedReason?: number;
    voidedSource?: number;
    voidedTimeMillis?: string;
}
