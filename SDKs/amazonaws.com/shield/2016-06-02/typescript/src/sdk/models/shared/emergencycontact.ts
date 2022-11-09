import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmergencyContact
/** 
 * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
**/
export class EmergencyContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactNotes" })
  contactNotes?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}
