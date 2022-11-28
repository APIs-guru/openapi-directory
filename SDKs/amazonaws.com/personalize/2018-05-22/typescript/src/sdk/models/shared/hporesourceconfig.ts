import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HpoResourceConfig
/** 
 * Describes the resource configuration for hyperparameter optimization (HPO).
**/
export class HpoResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxNumberOfTrainingJobs" })
  maxNumberOfTrainingJobs?: string;

  @SpeakeasyMetadata({ data: "json, name=maxParallelTrainingJobs" })
  maxParallelTrainingJobs?: string;
}
