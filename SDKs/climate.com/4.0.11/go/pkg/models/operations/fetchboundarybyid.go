package operations

import (
	"openapi/pkg/models/shared"
)

type FetchBoundaryByIDPathParams struct {
	BoundaryID string `pathParam:"style=simple,explode=false,name=boundaryId"`
}

type FetchBoundaryByIDSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchBoundaryByIDRequest struct {
	PathParams FetchBoundaryByIDPathParams
	Security   FetchBoundaryByIDSecurity
}

type FetchBoundaryByIDResponse struct {
	Boundary    *interface{}
	ContentType string
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}
