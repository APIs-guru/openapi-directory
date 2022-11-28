import { SpeakeasyBase } from "../../../internal/utils";
import { OrderTask } from "./ordertask";
/**
 * The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class OrderTaskCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    tasks?: OrderTask[];
    total?: number;
}
