package operations

import (
	"openapi/pkg/models/shared"
)

type ReposRemoveAppAccessRestrictionsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRemoveAppAccessRestrictionsRequestBody1 struct {
	Apps []string `json:"apps"`
}

type ReposRemoveAppAccessRestrictionsRequest struct {
	PathParams ReposRemoveAppAccessRestrictionsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type ReposRemoveAppAccessRestrictionsResponse struct {
	ContentType     string
	StatusCode      int64
	Integrations    []map[string]interface{}
	ValidationError *shared.ValidationError
}
