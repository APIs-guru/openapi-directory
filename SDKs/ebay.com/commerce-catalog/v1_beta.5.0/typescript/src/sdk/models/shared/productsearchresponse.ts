import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductSummary } from "./productsummary";
import { Refinement } from "./refinement";


// ProductSearchResponse
/** 
 * This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
**/
export class ProductSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=productSummaries", elemType: shared.ProductSummary })
  productSummaries?: ProductSummary[];

  @Metadata({ data: "json, name=refinement" })
  refinement?: Refinement;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
