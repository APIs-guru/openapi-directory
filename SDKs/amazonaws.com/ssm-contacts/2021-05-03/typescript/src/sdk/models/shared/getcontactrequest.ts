import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;
}
