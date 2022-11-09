import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HyperParameterTuningJobObjectiveTypeEnum } from "./hyperparametertuningjobobjectivetypeenum";


// FinalHyperParameterTuningJobObjectiveMetric
/** 
 * Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
**/
export class FinalHyperParameterTuningJobObjectiveMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=Type" })
  type?: HyperParameterTuningJobObjectiveTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: number;
}
