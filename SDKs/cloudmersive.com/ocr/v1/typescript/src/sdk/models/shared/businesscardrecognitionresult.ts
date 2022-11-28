import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BusinessCardRecognitionResult
/** 
 * Result of recognizing a business card, to extract the key information from the business card
**/
export class BusinessCardRecognitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressString" })
  addressString?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PersonName" })
  personName?: string;

  @SpeakeasyMetadata({ data: "json, name=PersonTitle" })
  personTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
