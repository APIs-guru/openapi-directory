package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingsOrganizationsOrganizationNameSendersPathParams struct {
	OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
}

type GetSettingsOrganizationsOrganizationNameSendersSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSettingsOrganizationsOrganizationNameSendersRequest struct {
	PathParams GetSettingsOrganizationsOrganizationNameSendersPathParams
	Security   GetSettingsOrganizationsOrganizationNameSendersSecurity
}

type GetSettingsOrganizationsOrganizationNameSendersResponse struct {
	ContentType string
	Senders     []shared.Sender
	StatusCode  int64
}
