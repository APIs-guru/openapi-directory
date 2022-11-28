import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactAddress } from "./contactaddress";
import { PhoneNumber } from "./phonenumber";



// Contact
/** 
 * This complex type contains contact information for an individual buyer or seller.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactAddress" })
  contactAddress?: ContactAddress;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: PhoneNumber;
}
