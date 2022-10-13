package operations

import (
	"openapi/pkg/models/shared"
)

type TopicTopicTopicNameGetPathParams struct {
	TopicName string `pathParam:"style=simple,explode=false,name=topic_name"`
}

type TopicTopicTopicNameGetQueryParams struct {
	Base64Message *string `queryParam:"style=form,explode=true,name=base64_message"`
	Message       *string `queryParam:"style=form,explode=true,name=message"`
}

type TopicTopicTopicNameGetHeaders struct {
	Authorization *string `header:"name=authorization"`
}

type TopicTopicTopicNameGetRequest struct {
	PathParams  TopicTopicTopicNameGetPathParams
	QueryParams TopicTopicTopicNameGetQueryParams
	Headers     TopicTopicTopicNameGetHeaders
}

type TopicTopicTopicNameGetResponse struct {
	ContentType                                 string
	HTTPValidationError                         *shared.HTTPValidationError
	StatusCode                                  int64
	TopicTopicTopicNameGet200ApplicationJSONAny *interface{}
}
