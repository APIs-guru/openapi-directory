import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeIpGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupIds" })
  groupIds?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
