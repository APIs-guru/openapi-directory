import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contact
/** 
 * The type that defines the fields for the information of the contact person for the account.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}
