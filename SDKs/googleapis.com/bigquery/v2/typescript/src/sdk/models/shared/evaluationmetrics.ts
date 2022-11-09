import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=arimaForecastingMetrics" })
  arimaForecastingMetrics?: ArimaForecastingMetrics;

  @Metadata({ data: "json, name=binaryClassificationMetrics" })
  binaryClassificationMetrics?: BinaryClassificationMetrics;

  @Metadata({ data: "json, name=clusteringMetrics" })
  clusteringMetrics?: ClusteringMetrics;

  @Metadata({ data: "json, name=dimensionalityReductionMetrics" })
  dimensionalityReductionMetrics?: DimensionalityReductionMetrics;

  @Metadata({ data: "json, name=multiClassClassificationMetrics" })
  multiClassClassificationMetrics?: MultiClassClassificationMetrics;

  @Metadata({ data: "json, name=rankingMetrics" })
  rankingMetrics?: RankingMetrics;

  @Metadata({ data: "json, name=regressionMetrics" })
  regressionMetrics?: RegressionMetrics;
}
