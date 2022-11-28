import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleCandidates
/** 
 * Discrete candidates of a double hyperparameter.
**/
export class DoubleCandidates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates" })
  candidates?: number[];
}
