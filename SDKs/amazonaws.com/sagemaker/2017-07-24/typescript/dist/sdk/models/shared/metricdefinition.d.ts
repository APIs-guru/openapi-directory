import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.
**/
export declare class MetricDefinition extends SpeakeasyBase {
    name: string;
    regex: string;
}
