import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostServerFollowersNameWithHostRejectPathParams extends SpeakeasyBase {
    nameWithHost: string;
}
export declare class PostServerFollowersNameWithHostRejectSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostServerFollowersNameWithHostRejectRequest extends SpeakeasyBase {
    pathParams: PostServerFollowersNameWithHostRejectPathParams;
    security: PostServerFollowersNameWithHostRejectSecurity;
}
export declare class PostServerFollowersNameWithHostRejectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
