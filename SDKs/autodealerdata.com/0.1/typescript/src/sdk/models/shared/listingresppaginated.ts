import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";



export class ListingRespPaginated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listings", elemType: Listing })
  listings: Listing[];

  @SpeakeasyMetadata({ data: "json, name=maxPages" })
  maxPages: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;
}
