package operations

import (
"openapi/pkg/models/shared")

type DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    ReceiverName string `pathParam:"style=simple,explode=false,name=receiverName"`
    
}

type DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest struct {
    PathParams DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams 
    Security DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity 
    
}

type DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse struct {
    ContentType string 
    Receiver *shared.Receiver 
    StatusCode int64 
    
}

