import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
/**
 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
**/
export declare class HyperParameterAlgorithmSpecification extends SpeakeasyBase {
    algorithmName?: string;
    metricDefinitions?: MetricDefinition[];
    trainingImage?: string;
    trainingInputMode: TrainingInputModeEnum;
}
