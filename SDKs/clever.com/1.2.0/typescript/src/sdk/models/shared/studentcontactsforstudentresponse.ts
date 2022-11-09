import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudentContact } from "./studentcontact";


export class StudentContactsForStudentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.StudentContact })
  data?: StudentContact[];
}
