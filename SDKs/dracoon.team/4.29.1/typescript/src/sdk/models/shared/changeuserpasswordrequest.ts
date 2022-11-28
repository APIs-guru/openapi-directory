import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeUserPasswordRequest
/** 
 * Request model for updating user's password
**/
export class ChangeUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "json, name=oldPassword" })
  oldPassword: string;
}
