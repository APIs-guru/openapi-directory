import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjectiveTypeEnum } from "./hyperparametertuningjobobjectivetypeenum";



// FinalHyperParameterTuningJobObjectiveMetric
/** 
 * Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
**/
export class FinalHyperParameterTuningJobObjectiveMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: HyperParameterTuningJobObjectiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
