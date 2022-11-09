import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvGooglePaySubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=purchaseToken" })
  purchaseToken: string;

  @Metadata({ data: "json, name=subscriptionItem" })
  subscriptionItem: string;
}
