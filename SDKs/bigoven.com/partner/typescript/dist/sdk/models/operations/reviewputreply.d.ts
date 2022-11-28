import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReviewPutReplyPathParams extends SpeakeasyBase {
    replyId: string;
}
export declare class ReviewPutReplyRequests extends SpeakeasyBase {
    api2ControllersWebApiReviewControllerPostReplyReq?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    api2ControllersWebApiReviewControllerPostReplyReq1?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    api2ControllersWebApiReviewControllerPostReplyReq2?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ReviewPutReplyRequest extends SpeakeasyBase {
    pathParams: ReviewPutReplyPathParams;
    request: ReviewPutReplyRequests;
}
export declare class ReviewPutReplyResponse extends SpeakeasyBase {
    bigOvenModelApiReply?: shared.BigOvenModelApiReply;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
