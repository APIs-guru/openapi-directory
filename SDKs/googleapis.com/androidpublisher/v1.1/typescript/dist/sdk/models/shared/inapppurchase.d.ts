import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An InappPurchase resource indicates the status of a user's inapp product purchase.
**/
export declare class InappPurchase extends SpeakeasyBase {
    consumptionState?: number;
    developerPayload?: string;
    kind?: string;
    orderId?: string;
    purchaseState?: number;
    purchaseTime?: string;
    purchaseType?: number;
}
