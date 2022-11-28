import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInventoryDeletionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
