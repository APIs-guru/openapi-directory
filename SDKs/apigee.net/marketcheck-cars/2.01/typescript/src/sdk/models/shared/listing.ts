import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { NestDealer } from "./nestdealer";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingFinance } from "./listingfinance";
import { ListingLease } from "./listinglease";
import { ListingNestMedia } from "./listingnestmedia";



// Listing
/** 
 * Represents a full list of attributes available with Marketcheck for a car
**/
export class Listing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: Build;

  @SpeakeasyMetadata({ data: "json, name=carfax_1_owner" })
  carfax1Owner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=carfax_clean_title" })
  carfaxCleanTitle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data_source" })
  dataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=dealer" })
  dealer?: NestDealer;

  @SpeakeasyMetadata({ data: "json, name=dom" })
  dom?: number;

  @SpeakeasyMetadata({ data: "json, name=dom_180" })
  dom180?: number;

  @SpeakeasyMetadata({ data: "json, name=dom_active" })
  domActive?: number;

  @SpeakeasyMetadata({ data: "json, name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: ListingNestExtraAttributes;

  @SpeakeasyMetadata({ data: "json, name=financing_options", elemType: ListingFinance })
  financingOptions?: ListingFinance[];

  @SpeakeasyMetadata({ data: "json, name=first_seen_at" })
  firstSeenAt?: number;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_date" })
  firstSeenAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_mc" })
  firstSeenAtMc?: number;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_mc_date" })
  firstSeenAtMcDate?: string;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_source" })
  firstSeenAtSource?: number;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_source_date" })
  firstSeenAtSourceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=interior_color" })
  interiorColor?: string;

  @SpeakeasyMetadata({ data: "json, name=inventory_type" })
  inventoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=is_certified" })
  isCertified?: number;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: number;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at_date" })
  lastSeenAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=leasing_options", elemType: ListingLease })
  leasingOptions?: ListingLease[];

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: ListingNestMedia;

  @SpeakeasyMetadata({ data: "json, name=miles" })
  miles?: number;

  @SpeakeasyMetadata({ data: "json, name=msrp" })
  msrp?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=ref_miles" })
  refMiles?: string;

  @SpeakeasyMetadata({ data: "json, name=ref_miles_dt" })
  refMilesDt?: number;

  @SpeakeasyMetadata({ data: "json, name=ref_price" })
  refPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=ref_price_dt" })
  refPriceDt?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=scraped_at" })
  scrapedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=scraped_at_date" })
  scrapedAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=seller_type" })
  sellerType?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=stock_no" })
  stockNo?: string;

  @SpeakeasyMetadata({ data: "json, name=vdp_url" })
  vdpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=vin" })
  vin?: string;
}
