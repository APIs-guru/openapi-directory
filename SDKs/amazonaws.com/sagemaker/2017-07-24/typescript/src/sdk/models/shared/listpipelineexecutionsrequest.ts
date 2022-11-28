import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortPipelineExecutionsByEnum } from "./sortpipelineexecutionsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListPipelineExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortPipelineExecutionsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
