import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Student } from "./student";



export class StudentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Student;
}
