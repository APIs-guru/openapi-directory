import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TopicTopicTopicNameGetPathParams extends SpeakeasyBase {
    topicName: string;
}
export declare class TopicTopicTopicNameGetQueryParams extends SpeakeasyBase {
    base64Message?: string;
    message?: string;
}
export declare class TopicTopicTopicNameGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class TopicTopicTopicNameGetRequest extends SpeakeasyBase {
    pathParams: TopicTopicTopicNameGetPathParams;
    queryParams: TopicTopicTopicNameGetQueryParams;
    headers: TopicTopicTopicNameGetHeaders;
}
export declare class TopicTopicTopicNameGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    topicTopicTopicNameGet200ApplicationJsonAny?: any;
}
