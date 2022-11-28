import { SpeakeasyBase } from "../../../internal/utils";
import { ProductSummary } from "./productsummary";
import { Refinement } from "./refinement";
/**
 * This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
**/
export declare class ProductSearchResponse extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    productSummaries?: ProductSummary[];
    refinement?: Refinement;
    total?: number;
}
