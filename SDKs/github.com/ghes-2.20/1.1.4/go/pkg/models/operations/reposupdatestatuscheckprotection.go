package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateStatusCheckProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateStatusCheckProtectionRequestBody struct {
	Contexts []string `json:"contexts"`
	Strict   *bool    `json:"strict"`
}

type ReposUpdateStatusCheckProtectionRequest struct {
	PathParams ReposUpdateStatusCheckProtectionPathParams
	Request    *ReposUpdateStatusCheckProtectionRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateStatusCheckProtectionResponse struct {
	ContentType       string
	StatusCode        int64
	BasicError        *shared.BasicError
	StatusCheckPolicy *shared.StatusCheckPolicy
	ValidationError   *shared.ValidationError
}
