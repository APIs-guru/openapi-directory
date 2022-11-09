import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;
}
