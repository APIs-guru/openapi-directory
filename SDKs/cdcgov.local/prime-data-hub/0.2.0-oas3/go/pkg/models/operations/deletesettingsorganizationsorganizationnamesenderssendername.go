package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams struct {
	OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
	SenderName       string `pathParam:"style=simple,explode=false,name=senderName"`
}

type DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest struct {
	PathParams DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams
	Security   DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity
}

type DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse struct {
	ContentType string
	Sender      *shared.Sender
	StatusCode  int64
}
