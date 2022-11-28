import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupTopicByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId: string;
}


export class GetGroupTopicById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: shared.Topic;
}


export class GetGroupTopicByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupTopicByIdQueryParams;
}


export class GetGroupTopicByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupTopicById200ApplicationJsonObject?: GetGroupTopicById200ApplicationJson;
}
