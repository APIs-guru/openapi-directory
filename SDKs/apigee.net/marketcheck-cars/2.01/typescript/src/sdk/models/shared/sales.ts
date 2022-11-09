import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SalesStats } from "./salesstats";
import { SalesStats } from "./salesstats";
import { SalesStats } from "./salesstats";


// Sales
/** 
 * Sales count query response
**/
export class Sales extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=counts" })
  counts?: number;

  @Metadata({ data: "json, name=cpo" })
  cpo?: number;

  @Metadata({ data: "json, name=dom_stats" })
  domStats?: SalesStats;

  @Metadata({ data: "json, name=inventory_type" })
  inventoryType?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=miles_stats" })
  milesStats?: SalesStats;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=non-cpo" })
  nonCpo?: number;

  @Metadata({ data: "json, name=price_stats" })
  priceStats?: SalesStats;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=taxonomy_vin" })
  taxonomyVin?: string;

  @Metadata({ data: "json, name=trim" })
  trim?: string;

  @Metadata({ data: "json, name=year" })
  year?: string;
}
