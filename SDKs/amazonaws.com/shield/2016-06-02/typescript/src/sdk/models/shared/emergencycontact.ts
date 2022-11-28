import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmergencyContact
/** 
 * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
**/
export class EmergencyContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactNotes" })
  contactNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}
