import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HpoResourceConfig
/** 
 * Describes the resource configuration for hyperparameter optimization (HPO).
**/
export class HpoResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxNumberOfTrainingJobs" })
  maxNumberOfTrainingJobs?: string;

  @Metadata({ data: "json, name=maxParallelTrainingJobs" })
  maxParallelTrainingJobs?: string;
}
