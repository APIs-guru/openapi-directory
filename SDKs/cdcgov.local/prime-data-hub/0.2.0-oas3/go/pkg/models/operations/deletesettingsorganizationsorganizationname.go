package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSettingsOrganizationsOrganizationNamePathParams struct {
	OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
}

type DeleteSettingsOrganizationsOrganizationNameSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteSettingsOrganizationsOrganizationNameRequest struct {
	PathParams DeleteSettingsOrganizationsOrganizationNamePathParams
	Security   DeleteSettingsOrganizationsOrganizationNameSecurity
}

type DeleteSettingsOrganizationsOrganizationNameResponse struct {
	ContentType  string
	Organization *shared.Organization
	StatusCode   int64
}
