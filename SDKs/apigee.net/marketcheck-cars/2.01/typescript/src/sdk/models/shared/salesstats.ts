import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesStats
/** 
 * Sales stats response
**/
export class SalesStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolute_mean_deviation" })
  absoluteMeanDeviation?: number;

  @Metadata({ data: "json, name=iqr" })
  iqr?: number;

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

  @Metadata({ data: "json, name=weighted_mean" })
  weightedMean?: number;
}
