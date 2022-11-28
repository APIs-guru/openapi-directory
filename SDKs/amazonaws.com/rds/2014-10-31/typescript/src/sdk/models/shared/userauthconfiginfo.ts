import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthSchemeEnum } from "./authschemeenum";
import { IamAuthModeEnum } from "./iamauthmodeenum";



// UserAuthConfigInfo
/** 
 * Returns the details of authentication used by a proxy to log in as a specific database user.
**/
export class UserAuthConfigInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authScheme?: AuthSchemeEnum;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  iamAuth?: IamAuthModeEnum;

  @SpeakeasyMetadata()
  secretArn?: string;

  @SpeakeasyMetadata()
  userName?: string;
}
