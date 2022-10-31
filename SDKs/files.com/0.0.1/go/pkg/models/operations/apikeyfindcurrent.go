package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeyFindCurrentResponse struct {
	APIKeyEntity *shared.APIKeyEntity
	ContentType  string
	StatusCode   int64
}
