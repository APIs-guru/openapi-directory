import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLogGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupNamePrefix" })
  logGroupNamePrefix?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
