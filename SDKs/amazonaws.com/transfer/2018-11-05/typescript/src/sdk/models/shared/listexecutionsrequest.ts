import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
