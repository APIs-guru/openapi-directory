package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupTopicRepliesByIDQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
	ReplyID string  `queryParam:"style=form,explode=true,name=reply_id"`
	TopicID string  `queryParam:"style=form,explode=true,name=topic_id"`
}

type GetGroupTopicRepliesByID200ApplicationJSON struct {
	Reply *shared.TopicReply `json:"reply,omitempty"`
	Stat  *string            `json:"stat,omitempty"`
}

type GetGroupTopicRepliesByIDRequest struct {
	QueryParams GetGroupTopicRepliesByIDQueryParams
}

type GetGroupTopicRepliesByIDResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetGroupTopicRepliesByID200ApplicationJSONObject *GetGroupTopicRepliesByID200ApplicationJSON
}
