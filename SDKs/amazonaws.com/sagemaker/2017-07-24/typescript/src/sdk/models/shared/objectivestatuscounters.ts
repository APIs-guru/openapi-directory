import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectiveStatusCounters
/** 
 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
**/
export class ObjectiveStatusCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=Pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=Succeeded" })
  succeeded?: number;
}
