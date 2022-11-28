import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId: string;
}
