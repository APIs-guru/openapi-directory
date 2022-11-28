import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecoverUserNameRequest
/** 
 * Recover usernames for email
**/
export class RecoverUserNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorLanguage" })
  creatorLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}
