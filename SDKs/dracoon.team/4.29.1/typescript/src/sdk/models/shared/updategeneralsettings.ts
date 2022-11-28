import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateAuthTokenRestrictions } from "./updateauthtokenrestrictions";



// UpdateGeneralSettings
/** 
 * Request model for updating general settings
**/
export class UpdateGeneralSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authTokenRestrictions" })
  authTokenRestrictions?: UpdateAuthTokenRestrictions;

  @SpeakeasyMetadata({ data: "json, name=cryptoEnabled" })
  cryptoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailNotificationButtonEnabled" })
  emailNotificationButtonEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eulaEnabled" })
  eulaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideLoginInputFields" })
  hideLoginInputFields?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaServerEnabled" })
  mediaServerEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3TagsEnabled" })
  s3TagsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharePasswordSmsEnabled" })
  sharePasswordSmsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weakPasswordEnabled" })
  weakPasswordEnabled?: boolean;
}
