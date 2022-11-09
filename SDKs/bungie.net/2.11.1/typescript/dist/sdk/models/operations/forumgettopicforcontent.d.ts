import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetTopicForContentPathParams extends SpeakeasyBase {
    contentId: number;
}
export declare class ForumGetTopicForContentRequest extends SpeakeasyBase {
    pathParams: ForumGetTopicForContentPathParams;
}
export declare class ForumGetTopicForContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
