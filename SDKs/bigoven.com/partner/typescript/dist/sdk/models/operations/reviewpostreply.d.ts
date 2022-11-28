import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewPostReplyPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class ReviewPostReplyRequests extends SpeakeasyBase {
    api2ControllersWebApiReviewControllerPostReplyReq?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    api2ControllersWebApiReviewControllerPostReplyReq1?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    api2ControllersWebApiReviewControllerPostReplyReq2?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ReviewPostReplyRequest extends SpeakeasyBase {
    pathParams: ReviewPostReplyPathParams;
    request: ReviewPostReplyRequests;
}
export declare class ReviewPostReplyResponse extends SpeakeasyBase {
    bigOvenModelApiReply?: shared.BigOvenModelApiReply;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
