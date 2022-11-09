import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTokenRestrictions } from "./authtokenrestrictions";


// GeneralSettings
/** 
 * General settings
**/
export class GeneralSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=authTokenRestrictions" })
  authTokenRestrictions?: AuthTokenRestrictions;

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

  @Metadata({ data: "json, name=useS3Storage" })
  useS3Storage?: boolean;

  @Metadata({ data: "json, name=weakPasswordEnabled" })
  weakPasswordEnabled?: boolean;
}
