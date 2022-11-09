import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Student } from "./student";


export class StudentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Student;
}
