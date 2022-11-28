import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosOwnershipIdRefusePathParams extends SpeakeasyBase {
    id: any;
}
export declare class PostVideosOwnershipIdRefuseSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostVideosOwnershipIdRefuseRequest extends SpeakeasyBase {
    pathParams: PostVideosOwnershipIdRefusePathParams;
    security: PostVideosOwnershipIdRefuseSecurity;
}
export declare class PostVideosOwnershipIdRefuseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
