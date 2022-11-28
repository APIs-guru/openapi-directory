import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaForecastingMetrics } from "./arimaforecastingmetrics";
import { BinaryClassificationMetrics } from "./binaryclassificationmetrics";
import { ClusteringMetrics } from "./clusteringmetrics";
import { DimensionalityReductionMetrics } from "./dimensionalityreductionmetrics";
import { MultiClassClassificationMetrics } from "./multiclassclassificationmetrics";
import { RankingMetrics } from "./rankingmetrics";
import { RegressionMetrics } from "./regressionmetrics";
/**
 * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
**/
export declare class EvaluationMetrics extends SpeakeasyBase {
    arimaForecastingMetrics?: ArimaForecastingMetrics;
    binaryClassificationMetrics?: BinaryClassificationMetrics;
    clusteringMetrics?: ClusteringMetrics;
    dimensionalityReductionMetrics?: DimensionalityReductionMetrics;
    multiClassClassificationMetrics?: MultiClassClassificationMetrics;
    rankingMetrics?: RankingMetrics;
    regressionMetrics?: RegressionMetrics;
}
