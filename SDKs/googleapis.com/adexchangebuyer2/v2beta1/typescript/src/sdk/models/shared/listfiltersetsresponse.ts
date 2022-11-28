import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterSet } from "./filterset";



// ListFilterSetsResponse
/** 
 * Response message for listing filter sets.
**/
export class ListFilterSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterSets", elemType: FilterSet })
  filterSets?: FilterSet[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
