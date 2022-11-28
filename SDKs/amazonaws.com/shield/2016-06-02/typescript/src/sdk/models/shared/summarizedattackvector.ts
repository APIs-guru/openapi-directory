import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SummarizedCounter } from "./summarizedcounter";



// SummarizedAttackVector
/** 
 * A summary of information about the attack.
**/
export class SummarizedAttackVector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VectorCounters", elemType: SummarizedCounter })
  vectorCounters?: SummarizedCounter[];

  @SpeakeasyMetadata({ data: "json, name=VectorType" })
  vectorType: string;
}
