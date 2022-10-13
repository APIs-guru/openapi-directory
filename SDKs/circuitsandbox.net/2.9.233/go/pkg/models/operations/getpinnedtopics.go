package operations

import (
	"openapi/pkg/models/shared"
)

type GetPinnedTopicsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPinnedTopicsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPinnedTopicsRequest struct {
	PathParams GetPinnedTopicsPathParams
	Security   GetPinnedTopicsSecurity
}

type GetPinnedTopicsResponse struct {
	Body              []byte
	ContentType       string
	SpacePinnedTopics []interface{}
	StatusCode        int64
}
