import { SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBuild } from "./motorcyclebuild";
import { NestDealer } from "./nestdealer";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Represents a full list of attributes available with Marketcheck for a car
**/
export declare class MotorcycleListing extends SpeakeasyBase {
    build?: MotorcycleBuild;
    color?: string;
    dealer?: NestDealer;
    dpUrl?: string;
    extra?: ListingNestExtraAttributes;
    firstSeenAt?: number;
    firstSeenAtDate?: string;
    heading?: string;
    id?: string;
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
