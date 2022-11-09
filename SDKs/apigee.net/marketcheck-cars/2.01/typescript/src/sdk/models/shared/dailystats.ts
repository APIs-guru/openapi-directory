import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DailyStatsNestedJson } from "./dailystatsnestedjson";
import { DailyStatsNestedJson } from "./dailystatsnestedjson";
import { DailyStatsNestedJson } from "./dailystatsnestedjson";


export class DailyStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=dom" })
  dom?: DailyStatsNestedJson;

  @Metadata({ data: "json, name=miles_stats" })
  milesStats?: DailyStatsNestedJson;

  @Metadata({ data: "json, name=price_stats" })
  priceStats?: DailyStatsNestedJson;

  @Metadata({ data: "json, name=units_for_sale" })
  unitsForSale?: number;
}
