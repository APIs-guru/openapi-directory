import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortPipelinesByEnum } from "./sortpipelinesbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListPipelinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineNamePrefix" })
  pipelineNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortPipelinesByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
