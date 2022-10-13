package operations

import (
	"openapi/pkg/models/shared"
)

type PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams struct {
	OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
	SenderName       string `pathParam:"style=simple,explode=false,name=senderName"`
}

type PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest struct {
	PathParams PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams
	Request    *shared.Sender `request:"mediaType=application/json"`
	Security   PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity
}

type PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse struct {
	ContentType string
	Senders     []shared.Sender
	StatusCode  int64
}
