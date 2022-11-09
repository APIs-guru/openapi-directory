import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId: string;
}
