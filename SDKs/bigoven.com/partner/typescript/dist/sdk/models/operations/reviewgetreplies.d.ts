import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewGetRepliesPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class ReviewGetRepliesQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class ReviewGetRepliesRequest extends SpeakeasyBase {
    pathParams: ReviewGetRepliesPathParams;
    queryParams: ReviewGetRepliesQueryParams;
}
export declare class ReviewGetRepliesResponse extends SpeakeasyBase {
    bigOvenModelApiReplies?: shared.BigOvenModelApiReply[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
