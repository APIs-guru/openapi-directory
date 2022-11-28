import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneralSettingsInfo
/** 
 * General settings
**/
export class GeneralSettingsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoEnabled" })
  cryptoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailNotificationButtonEnabled" })
  emailNotificationButtonEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eulaEnabled" })
  eulaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homeRoomParentId" })
  homeRoomParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=homeRoomsActive" })
  homeRoomsActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaServerEnabled" })
  mediaServerEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3TagsEnabled" })
  s3TagsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharePasswordSmsEnabled" })
  sharePasswordSmsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useS3Storage" })
  useS3Storage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weakPasswordEnabled" })
  weakPasswordEnabled?: boolean;
}
