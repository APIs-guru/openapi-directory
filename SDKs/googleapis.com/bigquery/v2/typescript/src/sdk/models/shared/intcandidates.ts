import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntCandidates
/** 
 * Discrete candidates of an int hyperparameter.
**/
export class IntCandidates extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates" })
  candidates?: string[];
}
