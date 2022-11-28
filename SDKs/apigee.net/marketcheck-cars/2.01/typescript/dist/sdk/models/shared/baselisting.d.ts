import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { NestDealer } from "./nestdealer";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Minimal set of attributes describing a listing
**/
export declare class BaseListing extends SpeakeasyBase {
    build?: Build;
    carfax1Owner?: boolean;
    carfaxCleanTitle?: boolean;
    dataSource?: string;
    dealer?: NestDealer;
    dist?: number;
    dom?: number;
    dom180?: number;
    domActive?: number;
    exteriorColor?: string;
    financingOptions?: ListingFinance[];
    firstSeenAt?: number;
    firstSeenAtDate?: string;
    heading?: string;
    id?: string;
    interiorColor?: string;
    inventoryType?: string;
    isCertified?: number;
    lastSeenAt?: number;
    lastSeenAtDate?: string;
    leasingOptions?: ListingLease[];
    media?: ListingNestMedia;
    miles?: number;
    modelCode?: string;
    msrp?: number;
    price?: number;
    refMiles?: string;
    refMilesDt?: number;
    refPrice?: string;
    refPriceDt?: number;
    scrapedAt?: number;
    scrapedAtDate?: string;
    sellerType?: string;
    source?: string;
    stockNo?: string;
    vdpUrl?: string;
    vin?: string;
}
