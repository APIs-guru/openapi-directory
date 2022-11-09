import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Contact
/** 
 * The type that defines the fields for the information of the contact person for the account.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;
}
