import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortPipelinesByEnum } from "./sortpipelinesbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListPipelinesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineNamePrefix" })
  pipelineNamePrefix?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortPipelinesByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
