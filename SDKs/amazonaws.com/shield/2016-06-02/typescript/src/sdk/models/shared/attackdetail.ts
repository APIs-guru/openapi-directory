import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SummarizedCounter } from "./summarizedcounter";
import { AttackProperty } from "./attackproperty";
import { Mitigation } from "./mitigation";
import { SubResourceSummary } from "./subresourcesummary";



// AttackDetail
/** 
 * The details of a DDoS attack.
**/
export class AttackDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackCounters", elemType: SummarizedCounter })
  attackCounters?: SummarizedCounter[];

  @SpeakeasyMetadata({ data: "json, name=AttackId" })
  attackId?: string;

  @SpeakeasyMetadata({ data: "json, name=AttackProperties", elemType: AttackProperty })
  attackProperties?: AttackProperty[];

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Mitigations", elemType: Mitigation })
  mitigations?: Mitigation[];

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubResources", elemType: SubResourceSummary })
  subResources?: SubResourceSummary[];
}
