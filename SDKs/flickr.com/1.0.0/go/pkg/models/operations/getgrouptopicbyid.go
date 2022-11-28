package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupTopicByIDQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
	TopicID string  `queryParam:"style=form,explode=true,name=topic_id"`
}

type GetGroupTopicByID200ApplicationJSON struct {
	Stat  *string       `json:"stat,omitempty"`
	Topic *shared.Topic `json:"topic,omitempty"`
}

type GetGroupTopicByIDRequest struct {
	QueryParams GetGroupTopicByIDQueryParams
}

type GetGroupTopicByIDResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetGroupTopicByID200ApplicationJSONObject *GetGroupTopicByID200ApplicationJSON
}
