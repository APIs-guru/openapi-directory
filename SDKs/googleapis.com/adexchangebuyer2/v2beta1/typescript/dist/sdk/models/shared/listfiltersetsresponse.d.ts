import { SpeakeasyBase } from "../../../internal/utils";
import { FilterSet } from "./filterset";
/**
 * Response message for listing filter sets.
**/
export declare class ListFilterSetsResponse extends SpeakeasyBase {
    filterSets?: FilterSet[];
    nextPageToken?: string;
}
