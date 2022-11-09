import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersMeNotificationSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=abuseAsModerator" })
  abuseAsModerator?: number;

  @Metadata({ data: "json, name=autoInstanceFollowing" })
  autoInstanceFollowing?: number;

  @Metadata({ data: "json, name=blacklistOnMyVideo" })
  blacklistOnMyVideo?: number;

  @Metadata({ data: "json, name=commentMention" })
  commentMention?: number;

  @Metadata({ data: "json, name=myVideoImportFinished" })
  myVideoImportFinished?: number;

  @Metadata({ data: "json, name=myVideoPublished" })
  myVideoPublished?: number;

  @Metadata({ data: "json, name=newCommentOnMyVideo" })
  newCommentOnMyVideo?: number;

  @Metadata({ data: "json, name=newFollow" })
  newFollow?: number;

  @Metadata({ data: "json, name=newInstanceFollower" })
  newInstanceFollower?: number;

  @Metadata({ data: "json, name=newUserRegistration" })
  newUserRegistration?: number;

  @Metadata({ data: "json, name=newVideoFromSubscription" })
  newVideoFromSubscription?: number;

  @Metadata({ data: "json, name=videoAutoBlacklistAsModerator" })
  videoAutoBlacklistAsModerator?: number;
}


export class PutUsersMeNotificationSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutUsersMeNotificationSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutUsersMeNotificationSettingsRequestBody;

  @Metadata()
  security: PutUsersMeNotificationSettingsSecurity;
}


export class PutUsersMeNotificationSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
