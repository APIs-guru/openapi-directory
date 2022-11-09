import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleCandidates
/** 
 * Discrete candidates of a double hyperparameter.
**/
export class DoubleCandidates extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates" })
  candidates?: number[];
}
