package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetStatusChecksProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetStatusChecksProtectionRequest struct {
	PathParams ReposGetStatusChecksProtectionPathParams
}

type ReposGetStatusChecksProtectionResponse struct {
	ContentType       string
	StatusCode        int64
	BasicError        *shared.BasicError
	StatusCheckPolicy *shared.StatusCheckPolicy
}
