import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ParameterRanges } from "./parameterranges";
import { ResourceLimits } from "./resourcelimits";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { TrainingJobEarlyStoppingTypeEnum } from "./trainingjobearlystoppingtypeenum";
import { TuningJobCompletionCriteria } from "./tuningjobcompletioncriteria";



// HyperParameterTuningJobConfig
/** 
 * Configures a hyperparameter tuning job.
**/
export class HyperParameterTuningJobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobObjective" })
  hyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  @SpeakeasyMetadata({ data: "json, name=ParameterRanges" })
  parameterRanges?: ParameterRanges;

  @SpeakeasyMetadata({ data: "json, name=ResourceLimits" })
  resourceLimits: ResourceLimits;

  @SpeakeasyMetadata({ data: "json, name=Strategy" })
  strategy: HyperParameterTuningJobStrategyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobEarlyStoppingType" })
  trainingJobEarlyStoppingType?: TrainingJobEarlyStoppingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TuningJobCompletionCriteria" })
  tuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}
