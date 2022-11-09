import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BusinessCardRecognitionResult
/** 
 * Result of recognizing a business card, to extract the key information from the business card
**/
export class BusinessCardRecognitionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressString" })
  addressString?: string;

  @Metadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=PersonName" })
  personName?: string;

  @Metadata({ data: "json, name=PersonTitle" })
  personTitle?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
