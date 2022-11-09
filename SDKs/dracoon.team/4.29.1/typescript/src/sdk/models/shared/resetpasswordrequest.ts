import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetPasswordRequest
/** 
 * Request model for reseting user's login password
**/
export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
