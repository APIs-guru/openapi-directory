import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupTopicRepliesByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
    replyId: string;
    topicId: string;
}
export declare class GetGroupTopicRepliesById200ApplicationJson extends SpeakeasyBase {
    reply?: shared.TopicReply;
    stat?: string;
}
export declare class GetGroupTopicRepliesByIdRequest extends SpeakeasyBase {
    queryParams: GetGroupTopicRepliesByIdQueryParams;
}
export declare class GetGroupTopicRepliesByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGroupTopicRepliesById200ApplicationJsonObject?: GetGroupTopicRepliesById200ApplicationJson;
}
