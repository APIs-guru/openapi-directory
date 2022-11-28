import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SummarizedAttackVector } from "./summarizedattackvector";
import { SummarizedCounter } from "./summarizedcounter";
import { SubResourceTypeEnum } from "./subresourcetypeenum";



// SubResourceSummary
/** 
 * The attack information for the specified SubResource.
**/
export class SubResourceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackVectors", elemType: SummarizedAttackVector })
  attackVectors?: SummarizedAttackVector[];

  @SpeakeasyMetadata({ data: "json, name=Counters", elemType: SummarizedCounter })
  counters?: SummarizedCounter[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SubResourceTypeEnum;
}
