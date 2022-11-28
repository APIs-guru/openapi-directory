import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V2GetTopicWithRepliesPathParams extends SpeakeasyBase {
    spaceId: string;
    topicId: string;
}
export declare class V2GetTopicWithRepliesQueryParams extends SpeakeasyBase {
    numberOfReplies?: number;
}
export declare class V2GetTopicWithRepliesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class V2GetTopicWithRepliesRequest extends SpeakeasyBase {
    pathParams: V2GetTopicWithRepliesPathParams;
    queryParams: V2GetTopicWithRepliesQueryParams;
    security: V2GetTopicWithRepliesSecurity;
}
export declare class V2GetTopicWithRepliesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceTopicWithReplies?: any;
    statusCode: number;
}
