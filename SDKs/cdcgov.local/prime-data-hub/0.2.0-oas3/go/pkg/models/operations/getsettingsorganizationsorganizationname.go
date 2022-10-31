package operations

import (
"openapi/pkg/models/shared")

type GetSettingsOrganizationsOrganizationNamePathParams struct {
    OrganizationName string `pathParam:"style=simple,explode=false,name=organizationName"`
    
}

type GetSettingsOrganizationsOrganizationNameSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSettingsOrganizationsOrganizationNameRequest struct {
    PathParams GetSettingsOrganizationsOrganizationNamePathParams 
    Security GetSettingsOrganizationsOrganizationNameSecurity 
    
}

type GetSettingsOrganizationsOrganizationNameResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

