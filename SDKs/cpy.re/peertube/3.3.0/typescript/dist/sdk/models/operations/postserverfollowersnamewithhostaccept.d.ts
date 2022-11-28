import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostServerFollowersNameWithHostAcceptPathParams extends SpeakeasyBase {
    nameWithHost: string;
}
export declare class PostServerFollowersNameWithHostAcceptSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostServerFollowersNameWithHostAcceptRequest extends SpeakeasyBase {
    pathParams: PostServerFollowersNameWithHostAcceptPathParams;
    security: PostServerFollowersNameWithHostAcceptSecurity;
}
export declare class PostServerFollowersNameWithHostAcceptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
