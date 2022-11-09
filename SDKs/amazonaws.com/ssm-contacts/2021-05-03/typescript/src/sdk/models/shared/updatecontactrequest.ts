import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Plan } from "./plan";


export class UpdateContactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Plan" })
  plan?: Plan;
}
