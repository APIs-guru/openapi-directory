import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";



export class UpdateContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Plan" })
  plan?: Plan;
}
