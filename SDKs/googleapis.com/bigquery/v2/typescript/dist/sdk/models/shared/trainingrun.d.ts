import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalExplanation } from "./globalexplanation";
import { DataSplitResult } from "./datasplitresult";
import { EvaluationMetrics } from "./evaluationmetrics";
import { IterationResult } from "./iterationresult";
import { TrainingOptions } from "./trainingoptions";
/**
 * Information about a single training query run for the model.
**/
export declare class TrainingRun extends SpeakeasyBase {
    classLevelGlobalExplanations?: GlobalExplanation[];
    dataSplitResult?: DataSplitResult;
    evaluationMetrics?: EvaluationMetrics;
    modelLevelGlobalExplanation?: GlobalExplanation;
    results?: IterationResult[];
    startTime?: string;
    trainingOptions?: TrainingOptions;
    trainingStartTime?: string;
    vertexAiModelId?: string;
    vertexAiModelVersion?: string;
}
/**
 * Information about a single training query run for the model.
**/
export declare class TrainingRunInput extends SpeakeasyBase {
    dataSplitResult?: DataSplitResult;
    evaluationMetrics?: EvaluationMetrics;
    modelLevelGlobalExplanation?: GlobalExplanation;
    trainingOptions?: TrainingOptions;
    vertexAiModelId?: string;
}
