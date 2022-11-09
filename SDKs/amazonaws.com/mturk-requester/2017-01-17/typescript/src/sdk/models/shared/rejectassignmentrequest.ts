import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @Metadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback: string;
}
