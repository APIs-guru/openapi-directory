import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterSummary } from "./filtersummary";


export class ListFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.FilterSummary })
  filters?: FilterSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
