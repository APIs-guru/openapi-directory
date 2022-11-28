import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchInferenceJobConfig
/** 
 * The configuration details of a batch inference job.
**/
export class BatchInferenceJobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemExplorationConfig" })
  itemExplorationConfig?: Map<string, string>;
}
