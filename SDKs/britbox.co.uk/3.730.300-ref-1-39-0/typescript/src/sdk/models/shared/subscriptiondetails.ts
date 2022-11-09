import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=itvData_purchased" })
  itvDataPurchased: Map<string, any>;
}
