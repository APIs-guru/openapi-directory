import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DailyStatsNestedJson
/** 
 * All nested JSON of stats
**/
export class DailyStatsNestedJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=interquartile_range" })
  interquartileRange?: number;

  @Metadata({ data: "json, name=mean" })
  mean?: number;

  @Metadata({ data: "json, name=median" })
  median?: number;

  @Metadata({ data: "json, name=population_standard_deviation" })
  populationStandardDeviation?: number;

  @Metadata({ data: "json, name=standard_deviation" })
  standardDeviation?: number;

  @Metadata({ data: "json, name=trimmed_mean" })
  trimmedMean?: number;

  @Metadata({ data: "json, name=variance" })
  variance?: number;
}
