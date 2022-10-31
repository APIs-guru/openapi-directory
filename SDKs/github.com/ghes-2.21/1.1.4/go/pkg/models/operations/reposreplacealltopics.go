package operations

import (
	"openapi/pkg/models/shared"
)

type ReposReplaceAllTopicsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposReplaceAllTopicsRequestBody struct {
	Names []string `json:"names"`
}

type ReposReplaceAllTopicsRequest struct {
	PathParams ReposReplaceAllTopicsPathParams
	Request    *ReposReplaceAllTopicsRequestBody `request:"mediaType=application/json"`
}

type ReposReplaceAllTopics415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposReplaceAllTopicsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	BasicError                                    *shared.BasicError
	ReposReplaceAllTopics415ApplicationJSONObject *ReposReplaceAllTopics415ApplicationJSON
	Topic                                         *shared.Topic
	ValidationErrorSimple                         *shared.ValidationErrorSimple
}
