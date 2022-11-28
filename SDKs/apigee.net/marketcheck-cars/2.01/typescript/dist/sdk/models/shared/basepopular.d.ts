import { SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";
/**
 * Single popular car in array
**/
export declare class BasePopular extends SpeakeasyBase {
    city?: string;
    counts?: string;
    domStats?: SalesStats;
    inventoryType?: string;
    make?: string;
    milesStats?: SalesStats;
    model?: string;
    priceStats?: SalesStats;
    state?: string;
}
