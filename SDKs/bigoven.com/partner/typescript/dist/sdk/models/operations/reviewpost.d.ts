import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewPostPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class ReviewPostRequests extends SpeakeasyBase {
    api2ControllersWebApiReviewControllerReviewRequest?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    api2ControllersWebApiReviewControllerReviewRequest1?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    api2ControllersWebApiReviewControllerReviewRequest2?: shared.Api2ControllersWebApiReviewControllerReviewRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ReviewPostRequest extends SpeakeasyBase {
    pathParams: ReviewPostPathParams;
    request: ReviewPostRequests;
}
export declare class ReviewPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
