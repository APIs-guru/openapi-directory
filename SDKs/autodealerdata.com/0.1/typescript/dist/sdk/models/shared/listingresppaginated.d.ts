import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Listing } from "./listing";
export declare class ListingRespPaginated extends SpeakeasyBase {
    listings: Listing[];
    maxPages: number;
    page: number;
}
