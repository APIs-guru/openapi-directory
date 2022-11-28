import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateAuthTokenRestrictions
/** 
 * Request model for updating auth token settings
**/
export class UpdateAuthTokenRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=overwriteEnabled" })
  overwriteEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
