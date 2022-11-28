import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostServerFollowingRequestBody extends SpeakeasyBase {
    handles?: string[];
    hosts?: string[];
}
export declare class PostServerFollowingSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostServerFollowingRequest extends SpeakeasyBase {
    request?: PostServerFollowingRequestBody;
    security: PostServerFollowingSecurity;
}
export declare class PostServerFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
