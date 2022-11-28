import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterSummary } from "./filtersummary";



export class ListFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: FilterSummary })
  filters?: FilterSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
