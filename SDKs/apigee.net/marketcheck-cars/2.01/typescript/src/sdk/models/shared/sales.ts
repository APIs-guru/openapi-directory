import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";



// Sales
/** 
 * Sales count query response
**/
export class Sales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=counts" })
  counts?: number;

  @SpeakeasyMetadata({ data: "json, name=cpo" })
  cpo?: number;

  @SpeakeasyMetadata({ data: "json, name=dom_stats" })
  domStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=inventory_type" })
  inventoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=miles_stats" })
  milesStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=non-cpo" })
  nonCpo?: number;

  @SpeakeasyMetadata({ data: "json, name=price_stats" })
  priceStats?: SalesStats;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomy_vin" })
  taxonomyVin?: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}
