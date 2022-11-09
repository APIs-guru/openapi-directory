import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { IntroductoryPriceInfo } from "./introductorypriceinfo";
import { SubscriptionPriceChange } from "./subscriptionpricechange";


// SubscriptionPurchase
/** 
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export class SubscriptionPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgementState" })
  acknowledgementState?: number;

  @Metadata({ data: "json, name=autoRenewing" })
  autoRenewing?: boolean;

  @Metadata({ data: "json, name=autoResumeTimeMillis" })
  autoResumeTimeMillis?: string;

  @Metadata({ data: "json, name=cancelReason" })
  cancelReason?: number;

  @Metadata({ data: "json, name=cancelSurveyResult" })
  cancelSurveyResult?: SubscriptionCancelSurveyResult;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=developerPayload" })
  developerPayload?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=expiryTimeMillis" })
  expiryTimeMillis?: string;

  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;

  @Metadata({ data: "json, name=introductoryPriceInfo" })
  introductoryPriceInfo?: IntroductoryPriceInfo;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=linkedPurchaseToken" })
  linkedPurchaseToken?: string;

  @Metadata({ data: "json, name=obfuscatedExternalAccountId" })
  obfuscatedExternalAccountId?: string;

  @Metadata({ data: "json, name=obfuscatedExternalProfileId" })
  obfuscatedExternalProfileId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=paymentState" })
  paymentState?: number;

  @Metadata({ data: "json, name=priceAmountMicros" })
  priceAmountMicros?: string;

  @Metadata({ data: "json, name=priceChange" })
  priceChange?: SubscriptionPriceChange;

  @Metadata({ data: "json, name=priceCurrencyCode" })
  priceCurrencyCode?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=profileName" })
  profileName?: string;

  @Metadata({ data: "json, name=promotionCode" })
  promotionCode?: string;

  @Metadata({ data: "json, name=promotionType" })
  promotionType?: number;

  @Metadata({ data: "json, name=purchaseType" })
  purchaseType?: number;

  @Metadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;

  @Metadata({ data: "json, name=userCancellationTimeMillis" })
  userCancellationTimeMillis?: string;
}
