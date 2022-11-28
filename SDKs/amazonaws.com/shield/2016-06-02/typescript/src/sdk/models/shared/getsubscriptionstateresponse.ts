import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStateEnum } from "./subscriptionstateenum";



export class GetSubscriptionStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscriptionState" })
  subscriptionState: SubscriptionStateEnum;
}
