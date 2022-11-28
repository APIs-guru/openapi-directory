import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortExperimentsByEnum } from "./sortexperimentsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListExperimentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortExperimentsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
