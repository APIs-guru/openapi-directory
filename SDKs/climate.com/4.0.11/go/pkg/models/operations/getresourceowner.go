package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceOwnerPathParams struct {
	ResourceOwnerID string `pathParam:"style=simple,explode=false,name=resourceOwnerId"`
}

type GetResourceOwnerSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetResourceOwnerRequest struct {
	PathParams GetResourceOwnerPathParams
	Security   GetResourceOwnerSecurity
}

type GetResourceOwnerResponse struct {
	ContentType   string
	Error         *shared.Error
	Headers       map[string][]string
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
