import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBuild } from "./motorcyclebuild";
import { NestDealer } from "./nestdealer";
import { ListingNestExtraAttributes } from "./listingnestextraattributes";
import { ListingNestMedia } from "./listingnestmedia";



// MotorcycleListing
/** 
 * Represents a full list of attributes available with Marketcheck for a car
**/
export class MotorcycleListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: MotorcycleBuild;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=dealer" })
  dealer?: NestDealer;

  @SpeakeasyMetadata({ data: "json, name=dp_url" })
  dpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: ListingNestExtraAttributes;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at" })
  firstSeenAt?: number;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_date" })
  firstSeenAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inventory_type" })
  inventoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: number;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at_date" })
  lastSeenAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: ListingNestMedia;

  @SpeakeasyMetadata({ data: "json, name=miles" })
  miles?: number;

  @SpeakeasyMetadata({ data: "json, name=msrp" })
  msrp?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

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

  @SpeakeasyMetadata({ data: "json, name=vin" })
  vin?: string;
}
