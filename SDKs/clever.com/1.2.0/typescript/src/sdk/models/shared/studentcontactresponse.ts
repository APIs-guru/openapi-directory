import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudentContact } from "./studentcontact";



export class StudentContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: StudentContact;
}
