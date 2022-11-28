import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Response message for listing products visible to the buyer.
**/
export declare class ListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: Product[];
}
