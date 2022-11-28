import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetPasswordWithTokenRequest
/** 
 * New password
**/
export class ResetPasswordWithTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
