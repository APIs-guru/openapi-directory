import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeInventoryDeletionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
