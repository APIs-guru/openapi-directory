import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionalityReductionMetrics
/** 
 * Model evaluation metrics for dimensionality reduction models.
**/
export class DimensionalityReductionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalExplainedVarianceRatio" })
  totalExplainedVarianceRatio?: number;
}
