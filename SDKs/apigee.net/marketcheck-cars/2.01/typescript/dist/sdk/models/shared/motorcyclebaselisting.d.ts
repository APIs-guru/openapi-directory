import { SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBuild } from "./motorcyclebuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Base motorcycle listing
**/
export declare class MotorcycleBaseListing extends SpeakeasyBase {
    build?: MotorcycleBuild;
    color?: string;
    dealer?: NestDealer;
    dist?: number;
    dpUrl?: string;
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
