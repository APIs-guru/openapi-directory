package operations

import (
	"openapi/pkg/models/shared"
)

type InteractionsGetRestrictionsForAuthenticatedUserResponse struct {
	ContentType              string
	StatusCode               int64
	InteractionLimitResponse *shared.InteractionLimitResponse
}
