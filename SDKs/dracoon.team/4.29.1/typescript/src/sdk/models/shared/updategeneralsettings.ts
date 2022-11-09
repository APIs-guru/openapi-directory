import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateAuthTokenRestrictions } from "./updateauthtokenrestrictions";


// UpdateGeneralSettings
/** 
 * Request model for updating general settings
**/
export class UpdateGeneralSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=authTokenRestrictions" })
  authTokenRestrictions?: UpdateAuthTokenRestrictions;

  @Metadata({ data: "json, name=cryptoEnabled" })
  cryptoEnabled?: boolean;

  @Metadata({ data: "json, name=emailNotificationButtonEnabled" })
  emailNotificationButtonEnabled?: boolean;

  @Metadata({ data: "json, name=eulaEnabled" })
  eulaEnabled?: boolean;

  @Metadata({ data: "json, name=hideLoginInputFields" })
  hideLoginInputFields?: boolean;

  @Metadata({ data: "json, name=mediaServerEnabled" })
  mediaServerEnabled?: boolean;

  @Metadata({ data: "json, name=s3TagsEnabled" })
  s3TagsEnabled?: boolean;

  @Metadata({ data: "json, name=sharePasswordSmsEnabled" })
  sharePasswordSmsEnabled?: boolean;

  @Metadata({ data: "json, name=weakPasswordEnabled" })
  weakPasswordEnabled?: boolean;
}
