import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { Error } from "./error";
/**
 * This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
**/
export declare class OrderSearchPagedCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    orders?: Order[];
    prev?: string;
    total?: number;
    warnings?: Error[];
}
