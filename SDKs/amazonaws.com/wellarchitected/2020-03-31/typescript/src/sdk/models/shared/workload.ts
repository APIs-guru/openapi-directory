import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadEnvironmentEnum } from "./workloadenvironmentenum";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";


// Workload
/** 
 * A workload return object.
**/
export class Workload extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @Metadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: WorkloadEnvironmentEnum;

  @Metadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: WorkloadImprovementStatusEnum;

  @Metadata({ data: "json, name=Industry" })
  industry?: string;

  @Metadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @Metadata({ data: "json, name=IsReviewOwnerUpdateAcknowledged" })
  isReviewOwnerUpdateAcknowledged?: boolean;

  @Metadata({ data: "json, name=Lenses" })
  lenses?: string[];

  @Metadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @Metadata({ data: "json, name=ReviewOwner" })
  reviewOwner?: string;

  @Metadata({ data: "json, name=ReviewRestrictionDate" })
  reviewRestrictionDate?: Date;

  @Metadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @Metadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
