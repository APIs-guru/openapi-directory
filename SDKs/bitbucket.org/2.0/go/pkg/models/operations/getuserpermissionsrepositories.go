package operations

import (
"openapi/pkg/models/shared")

type GetUserPermissionsRepositoriesQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetUserPermissionsRepositoriesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUserPermissionsRepositoriesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUserPermissionsRepositoriesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUserPermissionsRepositoriesSecurity struct {
    Option1 *GetUserPermissionsRepositoriesSecurityOption1 `security:"option"`
    Option2 *GetUserPermissionsRepositoriesSecurityOption2 `security:"option"`
    Option3 *GetUserPermissionsRepositoriesSecurityOption3 `security:"option"`
    
}

type GetUserPermissionsRepositoriesRequest struct {
    QueryParams GetUserPermissionsRepositoriesQueryParams 
    Security GetUserPermissionsRepositoriesSecurity 
    
}

type GetUserPermissionsRepositoriesResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions 
    
}

