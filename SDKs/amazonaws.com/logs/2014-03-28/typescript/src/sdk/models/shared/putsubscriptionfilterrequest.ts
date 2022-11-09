import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionEnum } from "./distributionenum";


export class PutSubscriptionFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: DistributionEnum;

  @Metadata({ data: "json, name=filterName" })
  filterName: string;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
