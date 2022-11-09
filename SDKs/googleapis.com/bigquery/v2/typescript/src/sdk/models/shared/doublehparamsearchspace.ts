import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DoubleCandidates } from "./doublecandidates";
import { DoubleRange } from "./doublerange";


// DoubleHparamSearchSpace
/** 
 * Search space for a double hyperparameter.
**/
export class DoubleHparamSearchSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates" })
  candidates?: DoubleCandidates;

  @Metadata({ data: "json, name=range" })
  range?: DoubleRange;
}
