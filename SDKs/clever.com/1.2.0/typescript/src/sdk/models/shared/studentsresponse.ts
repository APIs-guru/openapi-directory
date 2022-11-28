import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudentResponse } from "./studentresponse";



export class StudentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: StudentResponse })
  data?: StudentResponse[];
}
