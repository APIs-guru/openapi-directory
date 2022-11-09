import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateAuthTokenRestrictions
/** 
 * Request model for updating auth token settings
**/
export class UpdateAuthTokenRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=overwriteEnabled" })
  overwriteEnabled: boolean;

  @Metadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
