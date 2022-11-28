import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
import { Address } from "./address";



// IndividualAccount
/** 
 * The type that defines the fields for the information of an individual account.
**/
export class IndividualAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @SpeakeasyMetadata({ data: "json, name=registrationAddress" })
  registrationAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=secondaryPhone" })
  secondaryPhone?: Phone;
}
