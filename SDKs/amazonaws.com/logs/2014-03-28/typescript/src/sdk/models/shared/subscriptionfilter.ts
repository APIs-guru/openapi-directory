import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionEnum } from "./distributionenum";


// SubscriptionFilter
/** 
 * Represents a subscription filter.
**/
export class SubscriptionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @Metadata({ data: "json, name=destinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: DistributionEnum;

  @Metadata({ data: "json, name=filterName" })
  filterName?: string;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
