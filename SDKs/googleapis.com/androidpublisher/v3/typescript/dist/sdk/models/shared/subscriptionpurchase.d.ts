import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { IntroductoryPriceInfo } from "./introductorypriceinfo";
import { SubscriptionPriceChange } from "./subscriptionpricechange";
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export declare class SubscriptionPurchase extends SpeakeasyBase {
    acknowledgementState?: number;
    autoRenewing?: boolean;
    autoResumeTimeMillis?: string;
    cancelReason?: number;
    cancelSurveyResult?: SubscriptionCancelSurveyResult;
    countryCode?: string;
    developerPayload?: string;
    emailAddress?: string;
    expiryTimeMillis?: string;
    externalAccountId?: string;
    familyName?: string;
    givenName?: string;
    introductoryPriceInfo?: IntroductoryPriceInfo;
    kind?: string;
    linkedPurchaseToken?: string;
    obfuscatedExternalAccountId?: string;
    obfuscatedExternalProfileId?: string;
    orderId?: string;
    paymentState?: number;
    priceAmountMicros?: string;
    priceChange?: SubscriptionPriceChange;
    priceCurrencyCode?: string;
    profileId?: string;
    profileName?: string;
    promotionCode?: string;
    promotionType?: number;
    purchaseType?: number;
    startTimeMillis?: string;
    userCancellationTimeMillis?: string;
}
