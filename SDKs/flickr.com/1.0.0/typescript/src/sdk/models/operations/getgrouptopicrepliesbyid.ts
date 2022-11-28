import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupTopicRepliesByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reply_id" })
  replyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId: string;
}


export class GetGroupTopicRepliesById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reply" })
  reply?: shared.TopicReply;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetGroupTopicRepliesByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupTopicRepliesByIdQueryParams;
}


export class GetGroupTopicRepliesByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupTopicRepliesById200ApplicationJsonObject?: GetGroupTopicRepliesById200ApplicationJson;
}
