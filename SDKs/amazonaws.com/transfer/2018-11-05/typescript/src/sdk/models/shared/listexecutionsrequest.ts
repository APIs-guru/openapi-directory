import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
