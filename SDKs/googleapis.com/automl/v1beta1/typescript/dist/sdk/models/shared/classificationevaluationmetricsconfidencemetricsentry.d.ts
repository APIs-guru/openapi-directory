import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for a single confidence threshold.
**/
export declare class ClassificationEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
    confidenceThreshold?: number;
    f1Score?: number;
    f1ScoreAt1?: number;
    falseNegativeCount?: string;
    falsePositiveCount?: string;
    falsePositiveRate?: number;
    falsePositiveRateAt1?: number;
    positionThreshold?: number;
    precision?: number;
    precisionAt1?: number;
    recall?: number;
    recallAt1?: number;
    trueNegativeCount?: string;
    truePositiveCount?: string;
}
