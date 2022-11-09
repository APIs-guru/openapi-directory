import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFileUploadUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @Metadata({ data: "json, name=QuestionIdentifier" })
  questionIdentifier: string;
}
