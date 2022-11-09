import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoginResponse
/** 
 * Authentication token
**/
export class LoginResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;
}
