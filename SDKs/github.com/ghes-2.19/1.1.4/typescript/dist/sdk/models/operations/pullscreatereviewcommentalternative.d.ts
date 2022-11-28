import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsCreateReviewCommentAlternativePathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReviewCommentAlternativeRequestBody extends SpeakeasyBase {
    body: string;
    inReplyTo?: number;
}
export declare class PullsCreateReviewCommentAlternativeRequest extends SpeakeasyBase {
    pathParams: PullsCreateReviewCommentAlternativePathParams;
    request?: PullsCreateReviewCommentAlternativeRequestBody;
}
export declare class PullsCreateReviewCommentAlternativeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    legacyReviewComment?: shared.LegacyReviewComment;
}
