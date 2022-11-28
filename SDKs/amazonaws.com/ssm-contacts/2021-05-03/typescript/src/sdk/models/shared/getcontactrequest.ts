import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId: string;
}
