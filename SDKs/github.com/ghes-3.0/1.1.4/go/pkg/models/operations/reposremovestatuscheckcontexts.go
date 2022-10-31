package operations

import (
	"openapi/pkg/models/shared"
)

type ReposRemoveStatusCheckContextsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRemoveStatusCheckContextsRequestBody1 struct {
	Contexts []string `json:"contexts"`
}

type ReposRemoveStatusCheckContextsRequest struct {
	PathParams ReposRemoveStatusCheckContextsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type ReposRemoveStatusCheckContextsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	BasicError                                              *shared.BasicError
	ReposRemoveStatusCheckContexts200ApplicationJSONStrings []string
	ValidationError                                         *shared.ValidationError
}
