import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFileUploadUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionIdentifier" })
  questionIdentifier: string;
}
