import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesStats
/** 
 * Sales stats response
**/
export class SalesStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolute_mean_deviation" })
  absoluteMeanDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=iqr" })
  iqr?: number;

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

  @SpeakeasyMetadata({ data: "json, name=weighted_mean" })
  weightedMean?: number;
}
