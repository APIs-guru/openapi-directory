import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReviewDeleteReplyPathParams extends SpeakeasyBase {
    replyId: string;
}
export declare class ReviewDeleteReplyRequest extends SpeakeasyBase {
    pathParams: ReviewDeleteReplyPathParams;
}
export declare class ReviewDeleteReplyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
