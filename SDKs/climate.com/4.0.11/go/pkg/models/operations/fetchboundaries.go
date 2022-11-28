package operations

import (
	"openapi/pkg/models/shared"
)

type FetchBoundariesSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchBoundariesRequest struct {
	Request  *shared.BoundariesQuery `request:"mediaType=application/json"`
	Security FetchBoundariesSecurity
}

type FetchBoundariesResponse struct {
	Boundaries  *interface{}
	ContentType string
	Error       *shared.Error
	Headers     map[string][]string
	StatusCode  int64
}
