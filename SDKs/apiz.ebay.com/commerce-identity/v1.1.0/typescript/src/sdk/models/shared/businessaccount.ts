import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Contact } from "./contact";
import { Phone } from "./phone";
import { Phone } from "./phone";


// BusinessAccount
/** 
 * The type that defines the fields for the business account information.
**/
export class BusinessAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=doingBusinessAs" })
  doingBusinessAs?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryContact" })
  primaryContact?: Contact;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @Metadata({ data: "json, name=secondaryPhone" })
  secondaryPhone?: Phone;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
