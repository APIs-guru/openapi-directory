import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestPasswordResetResponse
/** 
 * This object contains the password reset code for the user
**/
export class RequestPasswordResetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=guid" })
  guid?: string;
}
