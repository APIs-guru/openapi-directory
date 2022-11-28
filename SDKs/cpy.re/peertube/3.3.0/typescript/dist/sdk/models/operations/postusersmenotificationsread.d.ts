import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersMeNotificationsReadRequestBody extends SpeakeasyBase {
    ids: number[];
}
export declare class PostUsersMeNotificationsReadSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostUsersMeNotificationsReadRequest extends SpeakeasyBase {
    request?: PostUsersMeNotificationsReadRequestBody;
    security: PostUsersMeNotificationsReadSecurity;
}
export declare class PostUsersMeNotificationsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
