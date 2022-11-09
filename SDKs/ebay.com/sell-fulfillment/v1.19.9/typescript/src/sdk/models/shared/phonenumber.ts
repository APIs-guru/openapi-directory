import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhoneNumber
/** 
 * This type contains a string field representing a telephone number.
**/
export class PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
