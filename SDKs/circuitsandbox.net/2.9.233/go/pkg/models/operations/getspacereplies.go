package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSpaceRepliesPathParams struct {
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
	TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
}

type GetSpaceRepliesSearchDirectionEnum string

const (
	GetSpaceRepliesSearchDirectionEnumBefore GetSpaceRepliesSearchDirectionEnum = "BEFORE"
	GetSpaceRepliesSearchDirectionEnumAfter  GetSpaceRepliesSearchDirectionEnum = "AFTER"
)

type GetSpaceRepliesQueryParams struct {
	NumberOfResults *float64                           `queryParam:"style=form,explode=true,name=numberOfResults"`
	SearchDirection GetSpaceRepliesSearchDirectionEnum `queryParam:"style=form,explode=true,name=searchDirection"`
	Timestamp       *time.Time                         `queryParam:"style=form,explode=true,name=timestamp"`
}

type GetSpaceRepliesSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetSpaceRepliesRequest struct {
	PathParams  GetSpaceRepliesPathParams
	QueryParams GetSpaceRepliesQueryParams
	Security    GetSpaceRepliesSecurity
}

type GetSpaceRepliesResponse struct {
	Body        []byte
	ContentType string
	SpaceReply  *interface{}
	StatusCode  int64
}
