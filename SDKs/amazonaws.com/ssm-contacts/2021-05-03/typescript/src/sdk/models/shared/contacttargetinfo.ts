import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactTargetInfo
/** 
 * The contact that Incident Manager is engaging during an incident.
**/
export class ContactTargetInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId?: string;

  @Metadata({ data: "json, name=IsEssential" })
  isEssential: boolean;
}
