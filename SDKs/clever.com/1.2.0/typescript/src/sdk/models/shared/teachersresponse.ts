import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeacherResponse } from "./teacherresponse";



export class TeachersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TeacherResponse })
  data?: TeacherResponse[];
}
