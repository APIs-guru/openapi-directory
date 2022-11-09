import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortPipelineExecutionsByEnum } from "./sortpipelineexecutionsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListPipelineExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortPipelineExecutionsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
