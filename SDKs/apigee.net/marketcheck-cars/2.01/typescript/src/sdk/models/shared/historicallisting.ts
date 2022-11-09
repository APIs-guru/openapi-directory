import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";


// HistoricalListing
/** 
 * Represents a car history entry
**/
export class HistoricalListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=carfax_1_owner" })
  carfax1Owner?: boolean;

  @Metadata({ data: "json, name=carfax_clean_title" })
  carfaxCleanTitle?: boolean;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=data_source" })
  dataSource?: string;

  @Metadata({ data: "json, name=dealer_id" })
  dealerId?: number;

  @Metadata({ data: "json, name=dom" })
  dom?: number;

  @Metadata({ data: "json, name=dom_180" })
  dom180?: number;

  @Metadata({ data: "json, name=dom_active" })
  domActive?: number;

  @Metadata({ data: "json, name=exterior_color" })
  exteriorColor?: string;

  @Metadata({ data: "json, name=financing_options", elemType: shared.ListingFinance })
  financingOptions?: ListingFinance[];

  @Metadata({ data: "json, name=first_seen_at" })
  firstSeenAt?: number;

  @Metadata({ data: "json, name=first_seen_at_date" })
  firstSeenAtDate?: string;

  @Metadata({ data: "json, name=heading" })
  heading?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=interior_color" })
  interiorColor?: string;

  @Metadata({ data: "json, name=inventory_type" })
  inventoryType?: string;

  @Metadata({ data: "json, name=is_certified" })
  isCertified?: number;

  @Metadata({ data: "json, name=is_searchable" })
  isSearchable?: string;

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: number;

  @Metadata({ data: "json, name=last_seen_at_date" })
  lastSeenAtDate?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=leasing_options", elemType: shared.ListingLease })
  leasingOptions?: ListingLease[];

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=miles" })
  miles?: number;

  @Metadata({ data: "json, name=msrp" })
  msrp?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=ref_miles" })
  refMiles?: string;

  @Metadata({ data: "json, name=ref_miles_dt" })
  refMilesDt?: number;

  @Metadata({ data: "json, name=ref_price" })
  refPrice?: string;

  @Metadata({ data: "json, name=ref_price_dt" })
  refPriceDt?: number;

  @Metadata({ data: "json, name=scraped_at" })
  scrapedAt?: number;

  @Metadata({ data: "json, name=scraped_at_date" })
  scrapedAtDate?: string;

  @Metadata({ data: "json, name=seller_name" })
  sellerName?: string;

  @Metadata({ data: "json, name=seller_name_o" })
  sellerNameO?: string;

  @Metadata({ data: "json, name=seller_type" })
  sellerType?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=status_date" })
  statusDate?: number;

  @Metadata({ data: "json, name=stock_no" })
  stockNo?: string;

  @Metadata({ data: "json, name=street" })
  street?: string;

  @Metadata({ data: "json, name=trim_r" })
  trimR?: string;

  @Metadata({ data: "json, name=vdp_url" })
  vdpUrl?: string;

  @Metadata({ data: "json, name=vin" })
  vin?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
