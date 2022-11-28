import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoginResponse
/** 
 * Authentication token
**/
export class LoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
