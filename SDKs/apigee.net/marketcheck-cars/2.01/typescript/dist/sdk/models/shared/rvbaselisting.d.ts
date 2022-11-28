import { SpeakeasyBase } from "../../../internal/utils";
import { RvBuild } from "./rvbuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Base RV listing
**/
export declare class RvBaseListing extends SpeakeasyBase {
    build?: RvBuild;
    dealer?: NestDealer;
    dist?: number;
    dpUrl?: string;
    exteriorColor?: string;
    firstSeenAt?: number;
    firstSeenAtDate?: string;
    heading?: string;
    id?: string;
    interiorColor?: string;
    inventoryType?: string;
    lastSeenAt?: number;
    lastSeenAtDate?: string;
    media?: ListingNestMedia;
    miles?: number;
    msrp?: number;
    price?: number;
    scrapedAt?: number;
    scrapedAtDate?: string;
    sellerType?: string;
    source?: string;
    stockNo?: string;
    vin?: string;
}
