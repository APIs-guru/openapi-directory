import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthTokenRestrictions
/** 
 * Auth token restrictions
**/
export class AuthTokenRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=restrictionEnabled" })
  restrictionEnabled?: boolean;
}
