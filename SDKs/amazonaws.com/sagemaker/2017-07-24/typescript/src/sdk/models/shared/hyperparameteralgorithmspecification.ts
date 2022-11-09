import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";


// HyperParameterAlgorithmSpecification
/** 
 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
**/
export class HyperParameterAlgorithmSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName?: string;

  @Metadata({ data: "json, name=MetricDefinitions", elemType: shared.MetricDefinition })
  metricDefinitions?: MetricDefinition[];

  @Metadata({ data: "json, name=TrainingImage" })
  trainingImage?: string;

  @Metadata({ data: "json, name=TrainingInputMode" })
  trainingInputMode: TrainingInputModeEnum;
}
