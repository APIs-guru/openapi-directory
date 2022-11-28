import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAcLsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
