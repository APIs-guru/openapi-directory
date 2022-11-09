import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Explanation } from "./explanation";


// GlobalExplanation
/** 
 * Global explanations containing the top most important features after training.
**/
export class GlobalExplanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=classLabel" })
  classLabel?: string;

  @Metadata({ data: "json, name=explanations", elemType: shared.Explanation })
  explanations?: Explanation[];
}
