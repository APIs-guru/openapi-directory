import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionFilter } from "./subscriptionfilter";



export class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionFilters", elemType: SubscriptionFilter })
  subscriptionFilters?: SubscriptionFilter[];
}
