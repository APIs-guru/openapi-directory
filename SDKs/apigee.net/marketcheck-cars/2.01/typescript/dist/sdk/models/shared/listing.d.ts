import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { NestDealer } from "./nestdealer";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
import { ListingNestMedia } from "./listingnestmedia";
/**
 * Represents a full list of attributes available with Marketcheck for a car
**/
export declare class Listing extends SpeakeasyBase {
    build?: Build;
    carfax1Owner?: boolean;
    carfaxCleanTitle?: boolean;
    dataSource?: string;
    dealer?: NestDealer;
    dom?: number;
    dom180?: number;
    domActive?: number;
    exteriorColor?: string;
    extra?: ListingNestExtraAttributes;
    financingOptions?: ListingFinance[];
    firstSeenAt?: number;
    firstSeenAtDate?: string;
    firstSeenAtMc?: number;
    firstSeenAtMcDate?: string;
    firstSeenAtSource?: number;
    firstSeenAtSourceDate?: string;
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
    msrp?: number;
    price?: number;
    rank?: number;
    refMiles?: string;
    refMilesDt?: number;
    refPrice?: string;
    refPriceDt?: number;
    score?: number;
    scrapedAt?: number;
    scrapedAtDate?: string;
    sellerType?: string;
    source?: string;
    stockNo?: string;
    vdpUrl?: string;
    vin?: string;
}
