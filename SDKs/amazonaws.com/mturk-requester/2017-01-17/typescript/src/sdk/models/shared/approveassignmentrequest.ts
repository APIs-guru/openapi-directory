import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApproveAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @SpeakeasyMetadata({ data: "json, name=OverrideRejection" })
  overrideRejection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback?: string;
}
