import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=HyperParameterTuningJobObjective" })
  hyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  @Metadata({ data: "json, name=ParameterRanges" })
  parameterRanges?: ParameterRanges;

  @Metadata({ data: "json, name=ResourceLimits" })
  resourceLimits: ResourceLimits;

  @Metadata({ data: "json, name=Strategy" })
  strategy: HyperParameterTuningJobStrategyTypeEnum;

  @Metadata({ data: "json, name=TrainingJobEarlyStoppingType" })
  trainingJobEarlyStoppingType?: TrainingJobEarlyStoppingTypeEnum;

  @Metadata({ data: "json, name=TuningJobCompletionCriteria" })
  tuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}
