import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SalesStats } from "./salesstats";
import { SalesStats } from "./salesstats";
import { SalesStats } from "./salesstats";


// BasePopular
/** 
 * Single popular car in array
**/
export class BasePopular extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=counts" })
  counts?: string;

  @Metadata({ data: "json, name=dom_stats" })
  domStats?: SalesStats;

  @Metadata({ data: "json, name=inventoryType" })
  inventoryType?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=miles_stats" })
  milesStats?: SalesStats;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=price_stats" })
  priceStats?: SalesStats;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
