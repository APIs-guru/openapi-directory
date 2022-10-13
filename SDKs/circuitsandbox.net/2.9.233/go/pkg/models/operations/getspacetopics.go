package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSpaceTopicsPathParams struct {
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

type GetSpaceTopicsSearchDirectionEnum string

const (
	GetSpaceTopicsSearchDirectionEnumBefore GetSpaceTopicsSearchDirectionEnum = "BEFORE"
	GetSpaceTopicsSearchDirectionEnumAfter  GetSpaceTopicsSearchDirectionEnum = "AFTER"
)

type GetSpaceTopicsQueryParams struct {
	NumberOfResults *float64                          `queryParam:"style=form,explode=true,name=numberOfResults"`
	SearchDirection GetSpaceTopicsSearchDirectionEnum `queryParam:"style=form,explode=true,name=searchDirection"`
	Timestamp       *time.Time                        `queryParam:"style=form,explode=true,name=timestamp"`
}

type GetSpaceTopicsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetSpaceTopicsRequest struct {
	PathParams  GetSpaceTopicsPathParams
	QueryParams GetSpaceTopicsQueryParams
	Security    GetSpaceTopicsSecurity
}

type GetSpaceTopicsResponse struct {
	Body        []byte
	ContentType string
	SpaceTopics []interface{}
	StatusCode  int64
}
