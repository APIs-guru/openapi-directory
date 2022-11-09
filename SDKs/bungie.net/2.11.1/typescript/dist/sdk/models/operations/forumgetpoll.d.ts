import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetPollPathParams extends SpeakeasyBase {
    topicId: number;
}
export declare class ForumGetPollRequest extends SpeakeasyBase {
    pathParams: ForumGetPollPathParams;
}
export declare class ForumGetPollResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
