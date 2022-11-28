import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
export declare class VoidedPurchase extends SpeakeasyBase {
    kind?: string;
    purchaseTimeMillis?: string;
    purchaseToken?: string;
    voidedTimeMillis?: string;
}
