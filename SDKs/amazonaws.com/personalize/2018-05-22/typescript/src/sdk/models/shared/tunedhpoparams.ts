import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TunedHpoParams
/** 
 * If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
**/
export class TunedHpoParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmHyperParameters" })
  algorithmHyperParameters?: Map<string, string>;
}
