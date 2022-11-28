import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";



// WorkloadSummary
/** 
 * A workload summary return object.
**/
export class WorkloadSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: WorkloadImprovementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Lenses" })
  lenses?: string[];

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
