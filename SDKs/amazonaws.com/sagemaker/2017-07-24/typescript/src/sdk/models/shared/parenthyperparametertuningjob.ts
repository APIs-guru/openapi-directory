import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParentHyperParameterTuningJob
/** 
 * A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
**/
export class ParentHyperParameterTuningJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName?: string;
}
