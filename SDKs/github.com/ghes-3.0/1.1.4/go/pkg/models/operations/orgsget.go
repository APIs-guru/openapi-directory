package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsGetPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsGetRequest struct {
	PathParams OrgsGetPathParams
}

type OrgsGetResponse struct {
	ContentType      string
	StatusCode       int64
	BasicError       *shared.BasicError
	OrganizationFull *shared.OrganizationFull
}
