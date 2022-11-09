import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordExpiration
/** 
 * Password expiration information
**/
export class PasswordExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=maxPasswordAge" })
  maxPasswordAge?: number;
}
