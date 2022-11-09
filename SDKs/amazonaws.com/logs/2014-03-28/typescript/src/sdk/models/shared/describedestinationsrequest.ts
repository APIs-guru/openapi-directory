import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDestinationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationNamePrefix" })
  destinationNamePrefix?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
