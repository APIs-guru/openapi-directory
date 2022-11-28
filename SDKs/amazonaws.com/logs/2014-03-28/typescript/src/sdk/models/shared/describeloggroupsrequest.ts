import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLogGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupNamePrefix" })
  logGroupNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
