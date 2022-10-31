package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectCheckoutKeyFingerprintPathParams struct {
	Fingerprint string `pathParam:"style=simple,explode=false,name=fingerprint"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectCheckoutKeyFingerprintRequest struct {
	PathParams GetProjectUsernameProjectCheckoutKeyFingerprintPathParams
}

type GetProjectUsernameProjectCheckoutKeyFingerprintResponse struct {
	ContentType string
	Key         *shared.Key
	StatusCode  int64
}
