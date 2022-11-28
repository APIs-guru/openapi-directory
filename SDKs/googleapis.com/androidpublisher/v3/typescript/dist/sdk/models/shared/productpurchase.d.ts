import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
export declare class ProductPurchase extends SpeakeasyBase {
    acknowledgementState?: number;
    consumptionState?: number;
    developerPayload?: string;
    kind?: string;
    obfuscatedExternalAccountId?: string;
    obfuscatedExternalProfileId?: string;
    orderId?: string;
    productId?: string;
    purchaseState?: number;
    purchaseTimeMillis?: string;
    purchaseToken?: string;
    purchaseType?: number;
    quantity?: number;
    regionCode?: string;
}
