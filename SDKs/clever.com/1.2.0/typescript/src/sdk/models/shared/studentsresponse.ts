import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudentResponse } from "./studentresponse";


export class StudentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.StudentResponse })
  data?: StudentResponse[];
}
