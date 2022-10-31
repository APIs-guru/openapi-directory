package operations

import (
	"openapi/pkg/models/shared"
)

type HeadSettingsOrganizationsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type HeadSettingsOrganizationsRequest struct {
	Security HeadSettingsOrganizationsSecurity
}

type HeadSettingsOrganizationsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
