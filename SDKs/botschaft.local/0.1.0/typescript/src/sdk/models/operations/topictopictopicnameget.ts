import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TopicTopicTopicNameGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topic_name" })
  topicName: string;
}


export class TopicTopicTopicNameGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class TopicTopicTopicNameGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TopicTopicTopicNameGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TopicTopicTopicNameGetPathParams;

  @Metadata()
  queryParams: TopicTopicTopicNameGetQueryParams;

  @Metadata()
  headers: TopicTopicTopicNameGetHeaders;
}


export class TopicTopicTopicNameGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  topicTopicTopicNameGet200ApplicationJsonAny?: any;
}
