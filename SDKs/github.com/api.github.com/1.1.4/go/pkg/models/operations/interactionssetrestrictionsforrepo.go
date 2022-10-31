package operations

import (
	"openapi/pkg/models/shared"
)

type InteractionsSetRestrictionsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type InteractionsSetRestrictionsForRepoRequest struct {
	PathParams InteractionsSetRestrictionsForRepoPathParams
	Request    *shared.InteractionLimit `request:"mediaType=application/json"`
}

type InteractionsSetRestrictionsForRepoResponse struct {
	ContentType              string
	StatusCode               int64
	InteractionLimitResponse *shared.InteractionLimitResponse
}
