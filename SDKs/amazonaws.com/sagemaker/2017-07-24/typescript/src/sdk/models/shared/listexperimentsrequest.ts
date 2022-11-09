import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortExperimentsByEnum } from "./sortexperimentsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListExperimentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortExperimentsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
