import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductSummary } from "./productsummary";
import { Refinement } from "./refinement";



// ProductSearchResponse
/** 
 * This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
**/
export class ProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=productSummaries", elemType: ProductSummary })
  productSummaries?: ProductSummary[];

  @SpeakeasyMetadata({ data: "json, name=refinement" })
  refinement?: Refinement;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
