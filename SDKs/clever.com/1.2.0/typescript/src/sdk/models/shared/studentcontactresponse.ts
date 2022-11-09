import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudentContact } from "./studentcontact";


export class StudentContactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: StudentContact;
}
