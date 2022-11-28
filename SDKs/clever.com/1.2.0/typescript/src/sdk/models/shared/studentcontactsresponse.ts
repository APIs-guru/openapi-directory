import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudentContactResponse } from "./studentcontactresponse";



export class StudentContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: StudentContactResponse })
  data?: StudentContactResponse[];
}
