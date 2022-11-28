import { SpeakeasyBase } from "../../../internal/utils";
import { HeavyEquipmentsBuild } from "./heavyequipmentsbuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Base heavy equipment listing
**/
export declare class HeavyEquipmentsBaseListing extends SpeakeasyBase {
    build?: HeavyEquipmentsBuild;
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
