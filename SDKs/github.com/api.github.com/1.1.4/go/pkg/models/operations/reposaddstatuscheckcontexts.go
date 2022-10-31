package operations

import (
	"openapi/pkg/models/shared"
)

type ReposAddStatusCheckContextsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposAddStatusCheckContextsRequestBody struct {
	Contexts []string `json:"contexts"`
}

type ReposAddStatusCheckContextsRequest struct {
	PathParams ReposAddStatusCheckContextsPathParams
	Request    *ReposAddStatusCheckContextsRequestBody `request:"mediaType=application/json"`
}

type ReposAddStatusCheckContextsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	BasicError                                           *shared.BasicError
	ReposAddStatusCheckContexts200ApplicationJSONStrings []string
	ValidationError                                      *shared.ValidationError
}
