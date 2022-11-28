import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
export declare class ProductPurchase extends SpeakeasyBase {
    consumptionState?: number;
    developerPayload?: string;
    kind?: string;
    orderId?: string;
    purchaseState?: number;
    purchaseTimeMillis?: string;
    purchaseType?: number;
}
