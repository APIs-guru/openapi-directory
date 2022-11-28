import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewGetReviewsPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class ReviewGetReviewsQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class ReviewGetReviewsRequest extends SpeakeasyBase {
    pathParams: ReviewGetReviewsPathParams;
    queryParams: ReviewGetReviewsQueryParams;
}
export declare class ReviewGetReviewsResponse extends SpeakeasyBase {
    bigOvenModelApiReviews?: shared.BigOvenModelApiReview[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
