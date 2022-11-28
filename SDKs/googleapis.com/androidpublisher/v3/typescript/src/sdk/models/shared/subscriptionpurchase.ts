import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { IntroductoryPriceInfo } from "./introductorypriceinfo";
import { SubscriptionPriceChange } from "./subscriptionpricechange";



// SubscriptionPurchase
/** 
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export class SubscriptionPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgementState" })
  acknowledgementState?: number;

  @SpeakeasyMetadata({ data: "json, name=autoRenewing" })
  autoRenewing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoResumeTimeMillis" })
  autoResumeTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelReason" })
  cancelReason?: number;

  @SpeakeasyMetadata({ data: "json, name=cancelSurveyResult" })
  cancelSurveyResult?: SubscriptionCancelSurveyResult;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=developerPayload" })
  developerPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryTimeMillis" })
  expiryTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=introductoryPriceInfo" })
  introductoryPriceInfo?: IntroductoryPriceInfo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedPurchaseToken" })
  linkedPurchaseToken?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentState" })
  paymentState?: number;

  @SpeakeasyMetadata({ data: "json, name=priceAmountMicros" })
  priceAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=priceChange" })
  priceChange?: SubscriptionPriceChange;

  @SpeakeasyMetadata({ data: "json, name=priceCurrencyCode" })
  priceCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileName" })
  profileName?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionCode" })
  promotionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionType" })
  promotionType?: number;

  @SpeakeasyMetadata({ data: "json, name=purchaseType" })
  purchaseType?: number;

  @SpeakeasyMetadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=userCancellationTimeMillis" })
  userCancellationTimeMillis?: string;
}
