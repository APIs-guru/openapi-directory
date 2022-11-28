import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";



// ExtendedContact
/** 
 * This type contains shipping and contact information for a buyer or an eBay shipping partner.
**/
export class ExtendedContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactAddress" })
  contactAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: PhoneNumber;
}
