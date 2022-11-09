import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupTopicByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId: string;
}


export class GetGroupTopicByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupTopicByIdQueryParams;
}


export class GetGroupTopicById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=stat" })
  stat?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: shared.Topic;
}


export class GetGroupTopicByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGroupTopicById200ApplicationJsonObject?: GetGroupTopicById200ApplicationJson;
}
