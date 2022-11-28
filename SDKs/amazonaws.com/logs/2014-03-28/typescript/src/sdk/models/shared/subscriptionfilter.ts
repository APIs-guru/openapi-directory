import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionEnum } from "./distributionenum";



// SubscriptionFilter
/** 
 * Represents a subscription filter.
**/
export class SubscriptionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=destinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: DistributionEnum;

  @SpeakeasyMetadata({ data: "json, name=filterName" })
  filterName?: string;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
