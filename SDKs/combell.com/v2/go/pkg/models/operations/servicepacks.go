package operations

import (
	"openapi/pkg/models/shared"
)

type ServicepacksResponse struct {
	ContentType  string
	Servicepacks []shared.Servicepack
	StatusCode   int64
}
