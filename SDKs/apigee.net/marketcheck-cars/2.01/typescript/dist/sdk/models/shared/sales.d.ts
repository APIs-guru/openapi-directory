import { SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";
/**
 * Sales count query response
**/
export declare class Sales extends SpeakeasyBase {
    city?: string;
    counts?: number;
    cpo?: number;
    domStats?: SalesStats;
    inventoryType?: string;
    make?: string;
    milesStats?: SalesStats;
    model?: string;
    nonCpo?: number;
    priceStats?: SalesStats;
    state?: string;
    taxonomyVin?: string;
    trim?: string;
    year?: string;
}
