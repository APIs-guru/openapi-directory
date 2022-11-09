import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneralSettingsInfo
/** 
 * General settings
**/
export class GeneralSettingsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoEnabled" })
  cryptoEnabled?: boolean;

  @Metadata({ data: "json, name=emailNotificationButtonEnabled" })
  emailNotificationButtonEnabled?: boolean;

  @Metadata({ data: "json, name=eulaEnabled" })
  eulaEnabled?: boolean;

  @Metadata({ data: "json, name=homeRoomParentId" })
  homeRoomParentId?: number;

  @Metadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive?: boolean;

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
