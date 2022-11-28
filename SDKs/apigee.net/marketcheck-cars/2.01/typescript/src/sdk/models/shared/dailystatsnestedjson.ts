import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DailyStatsNestedJson
/** 
 * All nested JSON of stats
**/
export class DailyStatsNestedJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interquartile_range" })
  interquartileRange?: number;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean?: number;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median?: number;

  @SpeakeasyMetadata({ data: "json, name=population_standard_deviation" })
  populationStandardDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=standard_deviation" })
  standardDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=trimmed_mean" })
  trimmedMean?: number;

  @SpeakeasyMetadata({ data: "json, name=variance" })
  variance?: number;
}
