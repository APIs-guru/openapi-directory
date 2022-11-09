import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupTopicRepliesByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reply_id" })
  replyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId: string;
}


export class GetGroupTopicRepliesByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupTopicRepliesByIdQueryParams;
}


export class GetGroupTopicRepliesById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=reply" })
  reply?: shared.TopicReply;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetGroupTopicRepliesByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGroupTopicRepliesById200ApplicationJsonObject?: GetGroupTopicRepliesById200ApplicationJson;
}
