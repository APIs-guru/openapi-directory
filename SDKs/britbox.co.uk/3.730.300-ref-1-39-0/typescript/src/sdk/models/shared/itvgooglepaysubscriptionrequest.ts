import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvGooglePaySubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=purchaseToken" })
  purchaseToken: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionItem" })
  subscriptionItem: string;
}
