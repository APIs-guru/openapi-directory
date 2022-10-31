package operations

import (
"openapi/pkg/models/shared")

type GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    ReceiverName string `pathParam:"style=simple,explode=false,name=receiverName"`
    
}

type GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest struct {
    PathParams GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams 
    Security GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity 
    
}

type GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse struct {
    ContentType string 
    Receiver *shared.Receiver 
    StatusCode int64 
    
}

