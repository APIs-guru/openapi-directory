import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { SubscriptionPriceChange } from "./subscriptionpricechange";
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export declare class SubscriptionPurchase extends SpeakeasyBase {
    autoRenewing?: boolean;
    cancelReason?: number;
    cancelSurveyResult?: SubscriptionCancelSurveyResult;
    countryCode?: string;
    developerPayload?: string;
    emailAddress?: string;
    expiryTimeMillis?: string;
    familyName?: string;
    givenName?: string;
    kind?: string;
    linkedPurchaseToken?: string;
    orderId?: string;
    paymentState?: number;
    priceAmountMicros?: string;
    priceChange?: SubscriptionPriceChange;
    priceCurrencyCode?: string;
    profileId?: string;
    profileName?: string;
    purchaseType?: number;
    startTimeMillis?: string;
    userCancellationTimeMillis?: string;
}
