import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosOwnershipIdAcceptPathParams extends SpeakeasyBase {
    id: any;
}
export declare class PostVideosOwnershipIdAcceptSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostVideosOwnershipIdAcceptRequest extends SpeakeasyBase {
    pathParams: PostVideosOwnershipIdAcceptPathParams;
    security: PostVideosOwnershipIdAcceptSecurity;
}
export declare class PostVideosOwnershipIdAcceptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
