import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDestinationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationNamePrefix" })
  destinationNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
