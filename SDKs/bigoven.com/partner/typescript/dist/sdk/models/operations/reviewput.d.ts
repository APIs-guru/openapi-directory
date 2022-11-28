import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewPutPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class ReviewPutRequests extends SpeakeasyBase {
    api2ControllersWebApiReviewControllerReviewRequest?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    api2ControllersWebApiReviewControllerReviewRequest1?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    api2ControllersWebApiReviewControllerReviewRequest2?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ReviewPutRequest extends SpeakeasyBase {
    pathParams: ReviewPutPathParams;
    request: ReviewPutRequests;
}
export declare class ReviewPutResponse extends SpeakeasyBase {
    bigOvenModelApiReview?: shared.BigOvenModelApiReview;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
