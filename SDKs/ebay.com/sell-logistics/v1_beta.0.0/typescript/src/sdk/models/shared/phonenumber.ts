import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhoneNumber
/** 
 * This complex type contains a string field representing a telephone number.
**/
export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
