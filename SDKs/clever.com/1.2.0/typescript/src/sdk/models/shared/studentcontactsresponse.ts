import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudentContactResponse } from "./studentcontactresponse";


export class StudentContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.StudentContactResponse })
  data?: StudentContactResponse[];
}
