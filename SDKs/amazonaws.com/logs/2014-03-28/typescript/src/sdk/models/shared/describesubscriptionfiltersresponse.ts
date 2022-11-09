import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionFilter } from "./subscriptionfilter";


export class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=subscriptionFilters", elemType: shared.SubscriptionFilter })
  subscriptionFilters?: SubscriptionFilter[];
}
