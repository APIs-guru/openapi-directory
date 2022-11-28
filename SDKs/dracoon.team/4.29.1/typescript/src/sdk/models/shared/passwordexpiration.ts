import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordExpiration
/** 
 * Password expiration information
**/
export class PasswordExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxPasswordAge" })
  maxPasswordAge?: number;
}
