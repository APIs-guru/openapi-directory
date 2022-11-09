import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionStateEnum } from "./subscriptionstateenum";


export class GetSubscriptionStateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubscriptionState" })
  subscriptionState: SubscriptionStateEnum;
}
