import { SpeakeasyBase } from "../../../internal/utils";
import { FilterSummary } from "./filtersummary";
export declare class ListFiltersResponse extends SpeakeasyBase {
    filters?: FilterSummary[];
    nextToken?: string;
}
