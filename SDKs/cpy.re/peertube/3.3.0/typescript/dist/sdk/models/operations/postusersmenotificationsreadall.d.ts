import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersMeNotificationsReadAllSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostUsersMeNotificationsReadAllRequest extends SpeakeasyBase {
    security: PostUsersMeNotificationsReadAllSecurity;
}
export declare class PostUsersMeNotificationsReadAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
