import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilteredBidCreativeRow } from "./filteredbidcreativerow";


// ListCreativeStatusBreakdownByCreativeResponse
/** 
 * Response message for listing all creatives associated with a given filtered bid reason.
**/
export class ListCreativeStatusBreakdownByCreativeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filteredBidCreativeRows", elemType: shared.FilteredBidCreativeRow })
  filteredBidCreativeRows?: FilteredBidCreativeRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
