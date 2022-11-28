import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionalityReductionMetrics
/** 
 * Model evaluation metrics for dimensionality reduction models.
**/
export class DimensionalityReductionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalExplainedVarianceRatio" })
  totalExplainedVarianceRatio?: number;
}
