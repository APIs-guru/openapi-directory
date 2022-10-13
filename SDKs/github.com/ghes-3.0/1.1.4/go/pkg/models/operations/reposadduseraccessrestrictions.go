package operations

import (
	"openapi/pkg/models/shared"
)

type ReposAddUserAccessRestrictionsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposAddUserAccessRestrictionsRequestBody1 struct {
	Users []string `json:"users"`
}

type ReposAddUserAccessRestrictionsRequest struct {
	PathParams ReposAddUserAccessRestrictionsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type ReposAddUserAccessRestrictionsResponse struct {
	ContentType     string
	StatusCode      int64
	SimpleUsers     []shared.SimpleUser
	ValidationError *shared.ValidationError
}
