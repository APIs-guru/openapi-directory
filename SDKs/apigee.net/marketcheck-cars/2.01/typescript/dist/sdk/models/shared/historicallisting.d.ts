import { SpeakeasyBase } from "../../../internal/utils";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
/**
 * Represents a car history entry
**/
export declare class HistoricalListing extends SpeakeasyBase {
    carfax1Owner?: boolean;
    carfaxCleanTitle?: boolean;
    city?: string;
    dataSource?: string;
    dealerId?: number;
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
    isSearchable?: string;
    lastSeenAt?: number;
    lastSeenAtDate?: string;
    latitude?: string;
    leasingOptions?: ListingLease[];
    longitude?: string;
    miles?: number;
    msrp?: number;
    price?: number;
    refMiles?: string;
    refMilesDt?: number;
    refPrice?: string;
    refPriceDt?: number;
    scrapedAt?: number;
    scrapedAtDate?: string;
    sellerName?: string;
    sellerNameO?: string;
    sellerType?: string;
    source?: string;
    state?: string;
    statusDate?: number;
    stockNo?: string;
    street?: string;
    trimR?: string;
    vdpUrl?: string;
    vin?: string;
    zip?: string;
}
