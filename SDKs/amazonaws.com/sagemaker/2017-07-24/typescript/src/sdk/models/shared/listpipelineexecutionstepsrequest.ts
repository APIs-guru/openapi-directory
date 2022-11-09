import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortOrderEnum } from "./sortorderenum";


export class ListPipelineExecutionStepsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
