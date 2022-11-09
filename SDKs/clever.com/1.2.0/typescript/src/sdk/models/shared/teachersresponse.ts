import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TeacherResponse } from "./teacherresponse";


export class TeachersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TeacherResponse })
  data?: TeacherResponse[];
}
