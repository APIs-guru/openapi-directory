package operations

import (
"openapi/pkg/models/shared")

type PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    ReceiverName string `pathParam:"style=simple,explode=false,name=receiverName"`
    
}

type PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest struct {
    PathParams PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams 
    Request *shared.Receiver `request:"mediaType=application/json"`
    Security PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity 
    
}

type PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse struct {
    ContentType string 
    Receiver *shared.Receiver 
    StatusCode int64 
    
}

