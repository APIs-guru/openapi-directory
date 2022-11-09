import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listing } from "./listing";


export class ListingRespPaginated extends SpeakeasyBase {
  @Metadata({ data: "json, name=listings", elemType: shared.Listing })
  listings: Listing[];

  @Metadata({ data: "json, name=maxPages" })
  maxPages: number;

  @Metadata({ data: "json, name=page" })
  page: number;
}
