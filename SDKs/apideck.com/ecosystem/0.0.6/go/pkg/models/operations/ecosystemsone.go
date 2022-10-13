package operations

import (
	"openapi/pkg/models/shared"
)

type EcosystemsOnePathParams struct {
	EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
}

type EcosystemsOneRequest struct {
	PathParams EcosystemsOnePathParams
}

type EcosystemsOneResponse struct {
	ContentType          string
	GetEcosystemResponse *shared.GetEcosystemResponse
	StatusCode           int64
}
