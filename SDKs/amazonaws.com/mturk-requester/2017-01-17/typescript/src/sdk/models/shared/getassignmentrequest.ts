import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId: string;
}
