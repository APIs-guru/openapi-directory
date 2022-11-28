import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidCreativeRow } from "./filteredbidcreativerow";



// ListCreativeStatusBreakdownByCreativeResponse
/** 
 * Response message for listing all creatives associated with a given filtered bid reason.
**/
export class ListCreativeStatusBreakdownByCreativeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filteredBidCreativeRows", elemType: FilteredBidCreativeRow })
  filteredBidCreativeRows?: FilteredBidCreativeRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
