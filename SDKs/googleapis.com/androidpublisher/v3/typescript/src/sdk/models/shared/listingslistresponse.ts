import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listing } from "./listing";


// ListingsListResponse
/** 
 * Response listing all localized listings.
**/
export class ListingsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=listings", elemType: shared.Listing })
  listings?: Listing[];
}
