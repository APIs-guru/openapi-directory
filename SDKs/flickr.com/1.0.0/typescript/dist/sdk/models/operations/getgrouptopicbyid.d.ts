import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupTopicByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
    topicId: string;
}
export declare class GetGroupTopicById200ApplicationJson extends SpeakeasyBase {
    stat?: string;
    topic?: shared.Topic;
}
export declare class GetGroupTopicByIdRequest extends SpeakeasyBase {
    queryParams: GetGroupTopicByIdQueryParams;
}
export declare class GetGroupTopicByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGroupTopicById200ApplicationJsonObject?: GetGroupTopicById200ApplicationJson;
}
