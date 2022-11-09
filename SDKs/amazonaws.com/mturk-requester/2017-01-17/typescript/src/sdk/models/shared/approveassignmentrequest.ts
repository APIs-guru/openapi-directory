import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApproveAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @Metadata({ data: "json, name=OverrideRejection" })
  overrideRejection?: boolean;

  @Metadata({ data: "json, name=RequesterFeedback" })
  requesterFeedback?: string;
}
