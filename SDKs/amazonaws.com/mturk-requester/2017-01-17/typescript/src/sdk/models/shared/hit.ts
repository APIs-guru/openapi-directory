import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HitReviewStatusEnum } from "./hitreviewstatusenum";
import { HitStatusEnum } from "./hitstatusenum";
import { QualificationRequirement } from "./qualificationrequirement";


// Hit
/** 
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
**/
export class Hit extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentDurationInSeconds" })
  assignmentDurationInSeconds?: number;

  @Metadata({ data: "json, name=AutoApprovalDelayInSeconds" })
  autoApprovalDelayInSeconds?: number;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Expiration" })
  expiration?: Date;

  @Metadata({ data: "json, name=HITGroupId" })
  hitGroupId?: string;

  @Metadata({ data: "json, name=HITId" })
  hitId?: string;

  @Metadata({ data: "json, name=HITLayoutId" })
  hitLayoutId?: string;

  @Metadata({ data: "json, name=HITReviewStatus" })
  hitReviewStatus?: HitReviewStatusEnum;

  @Metadata({ data: "json, name=HITStatus" })
  hitStatus?: HitStatusEnum;

  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;

  @Metadata({ data: "json, name=Keywords" })
  keywords?: string;

  @Metadata({ data: "json, name=MaxAssignments" })
  maxAssignments?: number;

  @Metadata({ data: "json, name=NumberOfAssignmentsAvailable" })
  numberOfAssignmentsAvailable?: number;

  @Metadata({ data: "json, name=NumberOfAssignmentsCompleted" })
  numberOfAssignmentsCompleted?: number;

  @Metadata({ data: "json, name=NumberOfAssignmentsPending" })
  numberOfAssignmentsPending?: number;

  @Metadata({ data: "json, name=QualificationRequirements", elemType: shared.QualificationRequirement })
  qualificationRequirements?: QualificationRequirement[];

  @Metadata({ data: "json, name=Question" })
  question?: string;

  @Metadata({ data: "json, name=RequesterAnnotation" })
  requesterAnnotation?: string;

  @Metadata({ data: "json, name=Reward" })
  reward?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
