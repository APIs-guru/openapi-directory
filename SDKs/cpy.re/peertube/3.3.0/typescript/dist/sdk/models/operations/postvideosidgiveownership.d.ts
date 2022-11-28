import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosIdGiveOwnershipPathParams extends SpeakeasyBase {
    id: any;
}
export declare class PostVideosIdGiveOwnershipRequestBody extends SpeakeasyBase {
    username: string;
}
export declare class PostVideosIdGiveOwnershipSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostVideosIdGiveOwnershipRequest extends SpeakeasyBase {
    pathParams: PostVideosIdGiveOwnershipPathParams;
    request: PostVideosIdGiveOwnershipRequestBody;
    security: PostVideosIdGiveOwnershipSecurity;
}
export declare class PostVideosIdGiveOwnershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
