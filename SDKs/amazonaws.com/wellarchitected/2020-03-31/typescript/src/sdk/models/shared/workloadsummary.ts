import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";


// WorkloadSummary
/** 
 * A workload summary return object.
**/
export class WorkloadSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: WorkloadImprovementStatusEnum;

  @Metadata({ data: "json, name=Lenses" })
  lenses?: string[];

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
