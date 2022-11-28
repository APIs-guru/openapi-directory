import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
/**
 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
**/
export declare class AlgorithmSpecification extends SpeakeasyBase {
    algorithmName?: string;
    enableSageMakerMetricsTimeSeries?: boolean;
    metricDefinitions?: MetricDefinition[];
    trainingImage?: string;
    trainingInputMode: TrainingInputModeEnum;
}
