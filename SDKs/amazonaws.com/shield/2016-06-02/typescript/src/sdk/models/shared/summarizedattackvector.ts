import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SummarizedCounter } from "./summarizedcounter";


// SummarizedAttackVector
/** 
 * A summary of information about the attack.
**/
export class SummarizedAttackVector extends SpeakeasyBase {
  @Metadata({ data: "json, name=VectorCounters", elemType: shared.SummarizedCounter })
  vectorCounters?: SummarizedCounter[];

  @Metadata({ data: "json, name=VectorType" })
  vectorType: string;
}
