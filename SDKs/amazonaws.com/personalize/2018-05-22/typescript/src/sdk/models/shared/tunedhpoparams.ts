import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TunedHpoParams
/** 
 * If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
**/
export class TunedHpoParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmHyperParameters" })
  algorithmHyperParameters?: Map<string, string>;
}
