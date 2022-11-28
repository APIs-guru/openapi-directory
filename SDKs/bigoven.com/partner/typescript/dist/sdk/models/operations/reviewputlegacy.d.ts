import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewPutLegacyPathParams extends SpeakeasyBase {
    recipeId: number;
    reviewId: number;
}
export declare class ReviewPutLegacyRequests extends SpeakeasyBase {
    api2ControllersWebApiReviewControllerReviewRequestLegacy?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;
    api2ControllersWebApiReviewControllerReviewRequestLegacy1?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;
    api2ControllersWebApiReviewControllerReviewRequestLegacy2?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ReviewPutLegacyRequest extends SpeakeasyBase {
    pathParams: ReviewPutLegacyPathParams;
    request: ReviewPutLegacyRequests;
}
export declare class ReviewPutLegacyResponse extends SpeakeasyBase {
    bigOvenModelApiReview?: shared.BigOvenModelApiReview;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
