import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactTargetInfo
/** 
 * The contact that Incident Manager is engaging during an incident.
**/
export class ContactTargetInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsEssential" })
  isEssential: boolean;
}
