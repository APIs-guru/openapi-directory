import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAcLsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
