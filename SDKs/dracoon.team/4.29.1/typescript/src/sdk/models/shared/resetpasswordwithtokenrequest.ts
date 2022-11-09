import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetPasswordWithTokenRequest
/** 
 * New password
**/
export class ResetPasswordWithTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;
}
