import { SpeakeasyBase } from "../../../internal/utils";
import { DealItem } from "./dealitem";
/**
 * The result set for the deal item search.
**/
export declare class DealItemSearchResponse extends SpeakeasyBase {
    dealItems?: DealItem[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
