import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTopicTagsPathParams extends SpeakeasyBase {
    topicId: string;
}
export declare class UpdateTopicTagsRequestBody extends SpeakeasyBase {
    tags: string[];
}
export declare class UpdateTopicTagsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateTopicTagsRequest extends SpeakeasyBase {
    pathParams: UpdateTopicTagsPathParams;
    request: UpdateTopicTagsRequestBody;
    security: UpdateTopicTagsSecurity;
}
export declare class UpdateTopicTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceTopic?: any;
    statusCode: number;
}
