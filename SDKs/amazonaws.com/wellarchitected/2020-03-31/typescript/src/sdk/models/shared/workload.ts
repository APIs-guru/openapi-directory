import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadEnvironmentEnum } from "./workloadenvironmentenum";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";



// Workload
/** 
 * A workload return object.
**/
export class Workload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: WorkloadEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: WorkloadImprovementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @SpeakeasyMetadata({ data: "json, name=IsReviewOwnerUpdateAcknowledged" })
  isReviewOwnerUpdateAcknowledged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Lenses" })
  lenses?: string[];

  @SpeakeasyMetadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReviewOwner" })
  reviewOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=ReviewRestrictionDate" })
  reviewRestrictionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
