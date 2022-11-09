import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecoverUserNameRequest
/** 
 * Recover usernames for email
**/
export class RecoverUserNameRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @Metadata({ data: "json, name=email" })
  email: string;
}
