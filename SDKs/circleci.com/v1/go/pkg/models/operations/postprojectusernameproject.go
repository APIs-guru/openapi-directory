package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectUsernameProjectPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostProjectUsernameProjectRequestBody struct {
	BuildParameters map[string]interface{} `json:"build_parameters,omitempty"`
	Parallel        *string                `json:"parallel,omitempty"`
	Revision        *string                `json:"revision,omitempty"`
	Tag             *string                `json:"tag,omitempty"`
}

type PostProjectUsernameProjectRequest struct {
	PathParams PostProjectUsernameProjectPathParams
	Request    *PostProjectUsernameProjectRequestBody `request:"mediaType=application/json"`
}

type PostProjectUsernameProjectResponse struct {
	BuildSummary *shared.BuildSummary
	ContentType  string
	StatusCode   int64
}
