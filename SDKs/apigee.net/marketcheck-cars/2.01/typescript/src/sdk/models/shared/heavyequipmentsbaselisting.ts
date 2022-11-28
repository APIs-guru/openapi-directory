import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeavyEquipmentsBuild } from "./heavyequipmentsbuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";



// HeavyEquipmentsBaseListing
/** 
 * Base heavy equipment listing
**/
export class HeavyEquipmentsBaseListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: HeavyEquipmentsBuild;

  @SpeakeasyMetadata({ data: "json, name=dealer" })
  dealer?: NestDealer;

  @SpeakeasyMetadata({ data: "json, name=dist" })
  dist?: number;

  @SpeakeasyMetadata({ data: "json, name=dp_url" })
  dpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at" })
  firstSeenAt?: number;

  @SpeakeasyMetadata({ data: "json, name=first_seen_at_date" })
  firstSeenAtDate?: string;

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=interior_color" })
  interiorColor?: string;

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
