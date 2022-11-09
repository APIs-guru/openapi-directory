import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SummarizedCounter } from "./summarizedcounter";
import { AttackProperty } from "./attackproperty";
import { Mitigation } from "./mitigation";
import { SubResourceSummary } from "./subresourcesummary";


// AttackDetail
/** 
 * The details of a DDoS attack.
**/
export class AttackDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackCounters", elemType: shared.SummarizedCounter })
  attackCounters?: SummarizedCounter[];

  @Metadata({ data: "json, name=AttackId" })
  attackId?: string;

  @Metadata({ data: "json, name=AttackProperties", elemType: shared.AttackProperty })
  attackProperties?: AttackProperty[];

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=Mitigations", elemType: shared.Mitigation })
  mitigations?: Mitigation[];

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=SubResources", elemType: shared.SubResourceSummary })
  subResources?: SubResourceSummary[];
}
