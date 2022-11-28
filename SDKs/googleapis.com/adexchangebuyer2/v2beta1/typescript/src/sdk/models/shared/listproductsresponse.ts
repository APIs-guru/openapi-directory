import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



// ListProductsResponse
/** 
 * Response message for listing products visible to the buyer.
**/
export class ListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: Product })
  products?: Product[];
}
