import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersMeNotificationSettingsRequestBody extends SpeakeasyBase {
    abuseAsModerator?: number;
    autoInstanceFollowing?: number;
    blacklistOnMyVideo?: number;
    commentMention?: number;
    myVideoImportFinished?: number;
    myVideoPublished?: number;
    newCommentOnMyVideo?: number;
    newFollow?: number;
    newInstanceFollower?: number;
    newUserRegistration?: number;
    newVideoFromSubscription?: number;
    videoAutoBlacklistAsModerator?: number;
}
export declare class PutUsersMeNotificationSettingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutUsersMeNotificationSettingsRequest extends SpeakeasyBase {
    request?: PutUsersMeNotificationSettingsRequestBody;
    security: PutUsersMeNotificationSettingsSecurity;
}
export declare class PutUsersMeNotificationSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
