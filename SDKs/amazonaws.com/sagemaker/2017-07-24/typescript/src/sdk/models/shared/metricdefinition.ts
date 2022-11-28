import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricDefinition
/** 
 * Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.
**/
export class MetricDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Regex" })
  regex: string;
}
