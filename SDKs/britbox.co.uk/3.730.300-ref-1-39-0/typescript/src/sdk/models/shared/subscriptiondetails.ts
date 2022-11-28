import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itvData_purchased" })
  itvDataPurchased: Map<string, any>;
}
