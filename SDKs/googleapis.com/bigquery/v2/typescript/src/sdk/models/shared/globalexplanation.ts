import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";



// GlobalExplanation
/** 
 * Global explanations containing the top most important features after training.
**/
export class GlobalExplanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classLabel" })
  classLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=explanations", elemType: Explanation })
  explanations?: Explanation[];
}
