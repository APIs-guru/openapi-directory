import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudentContact } from "./studentcontact";



export class StudentContactsForStudentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: StudentContact })
  data?: StudentContact[];
}
