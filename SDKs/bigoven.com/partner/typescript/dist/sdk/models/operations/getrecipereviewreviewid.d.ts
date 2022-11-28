import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecipeReviewReviewIdPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class GetRecipeReviewReviewIdRequest extends SpeakeasyBase {
    pathParams: GetRecipeReviewReviewIdPathParams;
}
export declare class GetRecipeReviewReviewIdResponse extends SpeakeasyBase {
    bigOvenModelApiReview?: shared.BigOvenModelApiReview;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
