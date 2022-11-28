import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback: string;
}
