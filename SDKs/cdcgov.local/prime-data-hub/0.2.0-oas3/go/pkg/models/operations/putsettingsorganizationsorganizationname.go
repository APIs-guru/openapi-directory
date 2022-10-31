package operations

import (
"openapi/pkg/models/shared")

type PutSettingsOrganizationsOrganizationNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    
}

type PutSettingsOrganizationsOrganizationNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutSettingsOrganizationsOrganizationNameRequest struct {
    PathParams PutSettingsOrganizationsOrganizationNamePathParams 
    Request *shared.Organization `request:"mediaType=application/json"`
    Security PutSettingsOrganizationsOrganizationNameSecurity 
    
}

type PutSettingsOrganizationsOrganizationNameResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

