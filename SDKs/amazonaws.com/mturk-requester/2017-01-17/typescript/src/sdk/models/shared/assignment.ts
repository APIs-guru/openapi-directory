import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";



// Assignment
/** 
 *  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. 
**/
export class Assignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptTime" })
  acceptTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=ApprovalTime" })
  approvalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssignmentStatus" })
  assignmentStatus?: AssignmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AutoApprovalTime" })
  autoApprovalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Deadline" })
  deadline?: Date;

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId?: string;

  @SpeakeasyMetadata({ data: "json, name=RejectionTime" })
  rejectionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
