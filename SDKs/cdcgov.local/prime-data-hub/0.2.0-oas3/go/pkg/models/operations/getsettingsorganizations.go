package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingsOrganizationsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSettingsOrganizationsRequest struct {
	Security GetSettingsOrganizationsSecurity
}

type GetSettingsOrganizationsResponse struct {
	ContentType   string
	Headers       map[string][]string
	Organizations []shared.Organization
	StatusCode    int64
}
