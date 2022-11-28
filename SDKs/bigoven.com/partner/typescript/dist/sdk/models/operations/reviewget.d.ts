import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewGetPathParams extends SpeakeasyBase {
    recipeId: number;
    reviewId: number;
}
export declare class ReviewGetRequest extends SpeakeasyBase {
    pathParams: ReviewGetPathParams;
}
export declare class ReviewGetResponse extends SpeakeasyBase {
    bigOvenModelApiReview?: shared.BigOvenModelApiReview;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
