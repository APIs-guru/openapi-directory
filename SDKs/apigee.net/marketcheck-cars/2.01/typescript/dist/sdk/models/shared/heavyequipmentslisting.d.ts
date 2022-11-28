import { SpeakeasyBase } from "../../../internal/utils";
import { RvBuild } from "./rvbuild";
import { NestDealer } from "./nestdealer";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Represents a full list of attributes available with Marketcheck for a car
**/
export declare class HeavyEquipmentsListing extends SpeakeasyBase {
    build?: RvBuild;
    dealer?: NestDealer;
    dpUrl?: string;
    exteriorColor?: string;
    extra?: ListingNestExtraAttributes;
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
