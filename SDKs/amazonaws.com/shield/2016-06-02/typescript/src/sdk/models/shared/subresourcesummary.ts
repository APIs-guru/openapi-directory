import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SummarizedAttackVector } from "./summarizedattackvector";
import { SummarizedCounter } from "./summarizedcounter";
import { SubResourceTypeEnum } from "./subresourcetypeenum";


// SubResourceSummary
/** 
 * The attack information for the specified SubResource.
**/
export class SubResourceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackVectors", elemType: shared.SummarizedAttackVector })
  attackVectors?: SummarizedAttackVector[];

  @Metadata({ data: "json, name=Counters", elemType: shared.SummarizedCounter })
  counters?: SummarizedCounter[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Type" })
  type?: SubResourceTypeEnum;
}
