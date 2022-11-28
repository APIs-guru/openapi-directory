import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArimaForecastingMetrics } from "./arimaforecastingmetrics";
import { BinaryClassificationMetrics } from "./binaryclassificationmetrics";
import { ClusteringMetrics } from "./clusteringmetrics";
import { DimensionalityReductionMetrics } from "./dimensionalityreductionmetrics";
import { MultiClassClassificationMetrics } from "./multiclassclassificationmetrics";
import { RankingMetrics } from "./rankingmetrics";
import { RegressionMetrics } from "./regressionmetrics";



// EvaluationMetrics
/** 
 * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
**/
export class EvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arimaForecastingMetrics" })
  arimaForecastingMetrics?: ArimaForecastingMetrics;

  @SpeakeasyMetadata({ data: "json, name=binaryClassificationMetrics" })
  binaryClassificationMetrics?: BinaryClassificationMetrics;

  @SpeakeasyMetadata({ data: "json, name=clusteringMetrics" })
  clusteringMetrics?: ClusteringMetrics;

  @SpeakeasyMetadata({ data: "json, name=dimensionalityReductionMetrics" })
  dimensionalityReductionMetrics?: DimensionalityReductionMetrics;

  @SpeakeasyMetadata({ data: "json, name=multiClassClassificationMetrics" })
  multiClassClassificationMetrics?: MultiClassClassificationMetrics;

  @SpeakeasyMetadata({ data: "json, name=rankingMetrics" })
  rankingMetrics?: RankingMetrics;

  @SpeakeasyMetadata({ data: "json, name=regressionMetrics" })
  regressionMetrics?: RegressionMetrics;
}
