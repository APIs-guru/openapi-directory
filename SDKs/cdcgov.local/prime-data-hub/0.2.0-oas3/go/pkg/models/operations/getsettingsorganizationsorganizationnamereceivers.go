package operations

import (
"openapi/pkg/models/shared")

type GetSettingsOrganizationsOrganizationNameReceiversPathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    
}

type GetSettingsOrganizationsOrganizationNameReceiversSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSettingsOrganizationsOrganizationNameReceiversRequest struct {
    PathParams GetSettingsOrganizationsOrganizationNameReceiversPathParams 
    Security GetSettingsOrganizationsOrganizationNameReceiversSecurity 
    
}

type GetSettingsOrganizationsOrganizationNameReceiversResponse struct {
    ContentType string 
    Receivers []shared.Receiver 
    StatusCode int64 
    
}

