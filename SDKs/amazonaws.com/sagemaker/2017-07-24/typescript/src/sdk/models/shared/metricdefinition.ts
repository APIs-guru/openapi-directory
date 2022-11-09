import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricDefinition
/** 
 * Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.
**/
export class MetricDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Regex" })
  regex: string;
}
