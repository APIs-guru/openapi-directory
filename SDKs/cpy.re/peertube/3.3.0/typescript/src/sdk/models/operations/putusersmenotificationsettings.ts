import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersMeNotificationSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abuseAsModerator" })
  abuseAsModerator?: number;

  @SpeakeasyMetadata({ data: "json, name=autoInstanceFollowing" })
  autoInstanceFollowing?: number;

  @SpeakeasyMetadata({ data: "json, name=blacklistOnMyVideo" })
  blacklistOnMyVideo?: number;

  @SpeakeasyMetadata({ data: "json, name=commentMention" })
  commentMention?: number;

  @SpeakeasyMetadata({ data: "json, name=myVideoImportFinished" })
  myVideoImportFinished?: number;

  @SpeakeasyMetadata({ data: "json, name=myVideoPublished" })
  myVideoPublished?: number;

  @SpeakeasyMetadata({ data: "json, name=newCommentOnMyVideo" })
  newCommentOnMyVideo?: number;

  @SpeakeasyMetadata({ data: "json, name=newFollow" })
  newFollow?: number;

  @SpeakeasyMetadata({ data: "json, name=newInstanceFollower" })
  newInstanceFollower?: number;

  @SpeakeasyMetadata({ data: "json, name=newUserRegistration" })
  newUserRegistration?: number;

  @SpeakeasyMetadata({ data: "json, name=newVideoFromSubscription" })
  newVideoFromSubscription?: number;

  @SpeakeasyMetadata({ data: "json, name=videoAutoBlacklistAsModerator" })
  videoAutoBlacklistAsModerator?: number;
}


export class PutUsersMeNotificationSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutUsersMeNotificationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutUsersMeNotificationSettingsRequestBody;

  @SpeakeasyMetadata()
  security: PutUsersMeNotificationSettingsSecurity;
}


export class PutUsersMeNotificationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
