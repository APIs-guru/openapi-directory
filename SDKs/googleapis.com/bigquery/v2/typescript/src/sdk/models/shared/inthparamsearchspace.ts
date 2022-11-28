import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntCandidates } from "./intcandidates";
import { IntRange } from "./intrange";



// IntHparamSearchSpace
/** 
 * Search space for an int hyperparameter.
**/
export class IntHparamSearchSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates" })
  candidates?: IntCandidates;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: IntRange;
}
