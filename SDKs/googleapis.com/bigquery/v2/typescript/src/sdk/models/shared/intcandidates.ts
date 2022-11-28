import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntCandidates
/** 
 * Discrete candidates of an int hyperparameter.
**/
export class IntCandidates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates" })
  candidates?: string[];
}
