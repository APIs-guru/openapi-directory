import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";



// ListingsListResponse
/** 
 * Response listing all localized listings.
**/
export class ListingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: Listing })
  listings?: Listing[];
}
