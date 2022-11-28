import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";



// HyperParameterAlgorithmSpecification
/** 
 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
**/
export class HyperParameterAlgorithmSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricDefinitions", elemType: MetricDefinition })
  metricDefinitions?: MetricDefinition[];

  @SpeakeasyMetadata({ data: "json, name=TrainingImage" })
  trainingImage?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingInputMode" })
  trainingInputMode: TrainingInputModeEnum;
}
