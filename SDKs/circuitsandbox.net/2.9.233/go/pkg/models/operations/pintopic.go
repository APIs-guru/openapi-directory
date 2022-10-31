package operations

import (
	"openapi/pkg/models/shared"
)

type PinTopicPathParams struct {
	TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
}

type PinTopicRequestBody struct {
	Position float64 `form:"name=position"`
}

type PinTopicSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PinTopicRequest struct {
	PathParams PinTopicPathParams
	Request    PinTopicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   PinTopicSecurity
}

type PinTopicResponse struct {
	ContentType string
	StatusCode  int64
}
