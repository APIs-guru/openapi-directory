package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTopicTagsPathParams struct {
	TopicID string `pathParam:"style=simple,explode=false,name=topicId"`
}

type UpdateTopicTagsRequestBody struct {
	Tags []string `form:"name=tags"`
}

type UpdateTopicTagsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateTopicTagsRequest struct {
	PathParams UpdateTopicTagsPathParams
	Request    UpdateTopicTagsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTopicTagsSecurity
}

type UpdateTopicTagsResponse struct {
	Body        []byte
	ContentType string
	SpaceTopic  *interface{}
	StatusCode  int64
}
