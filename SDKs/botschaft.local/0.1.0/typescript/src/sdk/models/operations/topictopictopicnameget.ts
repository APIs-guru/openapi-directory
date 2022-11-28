import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TopicTopicTopicNameGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic_name" })
  topicName: string;
}


export class TopicTopicTopicNameGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class TopicTopicTopicNameGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TopicTopicTopicNameGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TopicTopicTopicNameGetPathParams;

  @SpeakeasyMetadata()
  queryParams: TopicTopicTopicNameGetQueryParams;

  @SpeakeasyMetadata()
  headers: TopicTopicTopicNameGetHeaders;
}


export class TopicTopicTopicNameGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topicTopicTopicNameGet200ApplicationJsonAny?: any;
}
