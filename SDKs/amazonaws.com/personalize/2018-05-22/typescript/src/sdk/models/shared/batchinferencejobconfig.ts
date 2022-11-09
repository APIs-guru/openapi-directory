import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchInferenceJobConfig
/** 
 * The configuration details of a batch inference job.
**/
export class BatchInferenceJobConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemExplorationConfig" })
  itemExplorationConfig?: Map<string, string>;
}
