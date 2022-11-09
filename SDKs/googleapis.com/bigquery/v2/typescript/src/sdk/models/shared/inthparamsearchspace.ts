import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntCandidates } from "./intcandidates";
import { IntRange } from "./intrange";


// IntHparamSearchSpace
/** 
 * Search space for an int hyperparameter.
**/
export class IntHparamSearchSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates" })
  candidates?: IntCandidates;

  @Metadata({ data: "json, name=range" })
  range?: IntRange;
}
