import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { SubscriptionPriceChange } from "./subscriptionpricechange";



// SubscriptionPurchase
/** 
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export class SubscriptionPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoRenewing?: boolean;

  @SpeakeasyMetadata()
  cancelReason?: number;

  @SpeakeasyMetadata()
  cancelSurveyResult?: SubscriptionCancelSurveyResult;

  @SpeakeasyMetadata()
  countryCode?: string;

  @SpeakeasyMetadata()
  developerPayload?: string;

  @SpeakeasyMetadata()
  emailAddress?: string;

  @SpeakeasyMetadata()
  expiryTimeMillis?: string;

  @SpeakeasyMetadata()
  familyName?: string;

  @SpeakeasyMetadata()
  givenName?: string;

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  linkedPurchaseToken?: string;

  @SpeakeasyMetadata()
  orderId?: string;

  @SpeakeasyMetadata()
  paymentState?: number;

  @SpeakeasyMetadata()
  priceAmountMicros?: string;

  @SpeakeasyMetadata()
  priceChange?: SubscriptionPriceChange;

  @SpeakeasyMetadata()
  priceCurrencyCode?: string;

  @SpeakeasyMetadata()
  profileId?: string;

  @SpeakeasyMetadata()
  profileName?: string;

  @SpeakeasyMetadata()
  purchaseType?: number;

  @SpeakeasyMetadata()
  startTimeMillis?: string;

  @SpeakeasyMetadata()
  userCancellationTimeMillis?: string;
}
