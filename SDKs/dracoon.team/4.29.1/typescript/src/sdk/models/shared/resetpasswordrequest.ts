import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetPasswordRequest
/** 
 * Request model for reseting user's login password
**/
export class ResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
