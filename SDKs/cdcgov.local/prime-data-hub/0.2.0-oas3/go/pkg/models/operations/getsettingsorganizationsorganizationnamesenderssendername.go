package operations

import (
"openapi/pkg/models/shared")

type GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    SenderName string `pathParam:"style=simple,explode=false,name=senderName"`
    
}

type GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest struct {
    PathParams GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams 
    Security GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity 
    
}

type GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse struct {
    ContentType string 
    Sender *shared.Sender 
    StatusCode int64 
    
}

