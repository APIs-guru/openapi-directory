import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParentHyperParameterTuningJob } from "./parenthyperparametertuningjob";
import { HyperParameterTuningJobWarmStartTypeEnum } from "./hyperparametertuningjobwarmstarttypeenum";


// HyperParameterTuningJobWarmStartConfig
/** 
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
**/
export class HyperParameterTuningJobWarmStartConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParentHyperParameterTuningJobs", elemType: shared.ParentHyperParameterTuningJob })
  parentHyperParameterTuningJobs: ParentHyperParameterTuningJob[];

  @Metadata({ data: "json, name=WarmStartType" })
  warmStartType: HyperParameterTuningJobWarmStartTypeEnum;
}
