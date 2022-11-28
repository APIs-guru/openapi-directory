import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestPasswordResetResponse
/** 
 * This object contains the password reset code for the user
**/
export class RequestPasswordResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;
}
