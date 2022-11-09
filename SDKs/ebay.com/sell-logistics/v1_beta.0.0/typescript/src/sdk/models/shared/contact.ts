import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactAddress } from "./contactaddress";
import { PhoneNumber } from "./phonenumber";


// Contact
/** 
 * This complex type contains contact information for an individual buyer or seller.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=contactAddress" })
  contactAddress?: ContactAddress;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: PhoneNumber;
}
