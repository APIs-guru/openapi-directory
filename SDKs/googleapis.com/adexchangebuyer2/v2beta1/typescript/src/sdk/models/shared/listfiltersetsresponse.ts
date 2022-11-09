import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterSet } from "./filterset";


// ListFilterSetsResponse
/** 
 * Response message for listing filter sets.
**/
export class ListFilterSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterSets", elemType: shared.FilterSet })
  filterSets?: FilterSet[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
