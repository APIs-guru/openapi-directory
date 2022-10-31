package operations

import (
	"openapi/pkg/models/shared"
)

type ReposAddAppAccessRestrictionsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposAddAppAccessRestrictionsRequestBody struct {
	Apps []string `json:"apps"`
}

type ReposAddAppAccessRestrictionsRequest struct {
	PathParams ReposAddAppAccessRestrictionsPathParams
	Request    *ReposAddAppAccessRestrictionsRequestBody `request:"mediaType=application/json"`
}

type ReposAddAppAccessRestrictionsResponse struct {
	ContentType     string
	StatusCode      int64
	Integrations    []map[string]interface{}
	ValidationError *shared.ValidationError
}
