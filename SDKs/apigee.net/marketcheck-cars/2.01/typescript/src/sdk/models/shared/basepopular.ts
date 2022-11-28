import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";



// BasePopular
/** 
 * Single popular car in array
**/
export class BasePopular extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=counts" })
  counts?: string;

  @SpeakeasyMetadata({ data: "json, name=dom_stats" })
  domStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=inventoryType" })
  inventoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=miles_stats" })
  milesStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=price_stats" })
  priceStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
