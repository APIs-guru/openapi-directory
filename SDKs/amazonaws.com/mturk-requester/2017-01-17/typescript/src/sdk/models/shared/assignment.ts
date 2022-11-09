import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";


// Assignment
/** 
 *  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. 
**/
export class Assignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptTime" })
  acceptTime?: Date;

  @Metadata({ data: "json, name=Answer" })
  answer?: string;

  @Metadata({ data: "json, name=ApprovalTime" })
  approvalTime?: Date;

  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @Metadata({ data: "json, name=AssignmentStatus" })
  assignmentStatus?: AssignmentStatusEnum;

  @Metadata({ data: "json, name=AutoApprovalTime" })
  autoApprovalTime?: Date;

  @Metadata({ data: "json, name=Deadline" })
  deadline?: Date;

  @Metadata({ data: "json, name=HITId" })
  hitId?: string;

  @Metadata({ data: "json, name=RejectionTime" })
  rejectionTime?: Date;

  @Metadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback?: string;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
