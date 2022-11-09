import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Phone } from "./phone";
import { Address } from "./address";
import { Phone } from "./phone";


// IndividualAccount
/** 
 * The type that defines the fields for the information of an individual account.
**/
export class IndividualAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @Metadata({ data: "json, name=registrationAddress" })
  registrationAddress?: Address;

  @Metadata({ data: "json, name=secondaryPhone" })
  secondaryPhone?: Phone;
}
