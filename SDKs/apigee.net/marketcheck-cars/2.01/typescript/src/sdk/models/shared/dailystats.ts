import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DailyStatsNestedJson } from "./dailystatsnestedjson";



export class DailyStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dom" })
  dom?: DailyStatsNestedJson;

  @SpeakeasyMetadata({ data: "json, name=miles_stats" })
  milesStats?: DailyStatsNestedJson;

  @SpeakeasyMetadata({ data: "json, name=price_stats" })
  priceStats?: DailyStatsNestedJson;

  @SpeakeasyMetadata({ data: "json, name=units_for_sale" })
  unitsForSale?: number;
}
