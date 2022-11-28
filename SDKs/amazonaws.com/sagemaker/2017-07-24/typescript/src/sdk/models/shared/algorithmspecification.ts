import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";



// AlgorithmSpecification
/** 
 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
**/
export class AlgorithmSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableSageMakerMetricsTimeSeries" })
  enableSageMakerMetricsTimeSeries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MetricDefinitions", elemType: MetricDefinition })
  metricDefinitions?: MetricDefinition[];

  @SpeakeasyMetadata({ data: "json, name=TrainingImage" })
  trainingImage?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingInputMode" })
  trainingInputMode: TrainingInputModeEnum;
}
