import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChangeUserPasswordRequest
/** 
 * Request model for updating user's password
**/
export class ChangeUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newPassword" })
  newPassword: string;

  @Metadata({ data: "json, name=oldPassword" })
  oldPassword: string;
}
