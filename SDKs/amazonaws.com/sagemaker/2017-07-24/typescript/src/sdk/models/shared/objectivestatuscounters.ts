import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectiveStatusCounters
/** 
 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
**/
export class ObjectiveStatusCounters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failed" })
  failed?: number;

  @Metadata({ data: "json, name=Pending" })
  pending?: number;

  @Metadata({ data: "json, name=Succeeded" })
  succeeded?: number;
}
