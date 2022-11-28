package operations

import (
	"openapi/pkg/models/shared"
)

type FetchFarmOrganizationByTypeAndIDPathParams struct {
	FarmOrganizationID   string                          `pathParam:"style=simple,explode=false,name=farmOrganizationId"`
	FarmOrganizationType shared.FarmOrganizationTypeEnum `pathParam:"style=simple,explode=false,name=farmOrganizationType"`
}

type FetchFarmOrganizationByTypeAndIDSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchFarmOrganizationByTypeAndIDRequest struct {
	PathParams FetchFarmOrganizationByTypeAndIDPathParams
	Security   FetchFarmOrganizationByTypeAndIDSecurity
}

type FetchFarmOrganizationByTypeAndIDResponse struct {
	ContentType      string
	Error            *shared.Error
	FarmOrganization *interface{}
	Headers          map[string][]string
	StatusCode       int64
}
