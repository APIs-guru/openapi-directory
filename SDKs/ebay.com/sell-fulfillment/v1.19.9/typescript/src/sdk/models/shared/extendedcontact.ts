import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";


// ExtendedContact
/** 
 * This type contains shipping and contact information for a buyer or an eBay shipping partner.
**/
export class ExtendedContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=contactAddress" })
  contactAddress?: Address;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: PhoneNumber;
}
