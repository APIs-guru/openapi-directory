import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionEnum } from "./distributionenum";



export class PutSubscriptionFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: DistributionEnum;

  @SpeakeasyMetadata({ data: "json, name=filterName" })
  filterName: string;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
