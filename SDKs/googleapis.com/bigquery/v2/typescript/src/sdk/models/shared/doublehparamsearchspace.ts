import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleCandidates } from "./doublecandidates";
import { DoubleRange } from "./doublerange";



// DoubleHparamSearchSpace
/** 
 * Search space for a double hyperparameter.
**/
export class DoubleHparamSearchSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates" })
  candidates?: DoubleCandidates;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DoubleRange;
}
