import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
import { Phone } from "./phone";



// BusinessAccount
/** 
 * The type that defines the fields for the business account information.
**/
export class BusinessAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=doingBusinessAs" })
  doingBusinessAs?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: Contact;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @SpeakeasyMetadata({ data: "json, name=secondaryPhone" })
  secondaryPhone?: Phone;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
