package operations

import (
"openapi/pkg/models/shared")


type GetRepositoriesRoleEnum string

const (
    GetRepositoriesRoleEnumAdmin GetRepositoriesRoleEnum = "admin"
GetRepositoriesRoleEnumContributor GetRepositoriesRoleEnum = "contributor"
GetRepositoriesRoleEnumMember GetRepositoriesRoleEnum = "member"
GetRepositoriesRoleEnumOwner GetRepositoriesRoleEnum = "owner"
)


type GetRepositoriesQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Role *GetRepositoriesRoleEnum `queryParam:"style=form,explode=true,name=role"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesSecurity struct {
    Option1 *GetRepositoriesSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesSecurityOption3 `security:"option"`
    
}

type GetRepositoriesRequest struct {
    QueryParams GetRepositoriesQueryParams 
    Security GetRepositoriesSecurity 
    
}

type GetRepositoriesResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedRepositories *shared.PaginatedRepositories 
    
}

