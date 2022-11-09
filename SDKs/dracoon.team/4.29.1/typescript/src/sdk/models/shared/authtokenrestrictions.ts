import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthTokenRestrictions
/** 
 * Auth token restrictions
**/
export class AuthTokenRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;

  @Metadata({ data: "json, name=restrictionEnabled" })
  restrictionEnabled?: boolean;
}
