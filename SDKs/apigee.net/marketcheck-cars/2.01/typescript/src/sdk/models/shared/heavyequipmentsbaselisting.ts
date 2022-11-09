import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeavyEquipmentsBuild } from "./heavyequipmentsbuild";
import { NestDealer } from "./nestdealer";
import { ListingNestMedia } from "./listingnestmedia";


// HeavyEquipmentsBaseListing
/** 
 * Base heavy equipment listing
**/
export class HeavyEquipmentsBaseListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=build" })
  build?: HeavyEquipmentsBuild;

  @Metadata({ data: "json, name=dealer" })
  dealer?: NestDealer;

  @Metadata({ data: "json, name=dist" })
  dist?: number;

  @Metadata({ data: "json, name=dp_url" })
  dpUrl?: string;

  @Metadata({ data: "json, name=exterior_color" })
  exteriorColor?: string;

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

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: number;

  @Metadata({ data: "json, name=last_seen_at_date" })
  lastSeenAtDate?: string;

  @Metadata({ data: "json, name=media" })
  media?: ListingNestMedia;

  @Metadata({ data: "json, name=miles" })
  miles?: number;

  @Metadata({ data: "json, name=msrp" })
  msrp?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=scraped_at" })
  scrapedAt?: number;

  @Metadata({ data: "json, name=scraped_at_date" })
  scrapedAtDate?: string;

  @Metadata({ data: "json, name=seller_type" })
  sellerType?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=stock_no" })
  stockNo?: string;

  @Metadata({ data: "json, name=vin" })
  vin?: string;
}
