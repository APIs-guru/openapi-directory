package operations

import (
"openapi/pkg/models/shared")

type OrgsListMembersPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}


type OrgsListMembersFilterEnum string

const (
    OrgsListMembersFilterEnumTwofaDisabled OrgsListMembersFilterEnum = "2fa_disabled"
OrgsListMembersFilterEnumAll OrgsListMembersFilterEnum = "all"
)



type OrgsListMembersRoleEnum string

const (
    OrgsListMembersRoleEnumAll OrgsListMembersRoleEnum = "all"
OrgsListMembersRoleEnumAdmin OrgsListMembersRoleEnum = "admin"
OrgsListMembersRoleEnumMember OrgsListMembersRoleEnum = "member"
)


type OrgsListMembersQueryParams struct {
    Filter *OrgsListMembersFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Role *OrgsListMembersRoleEnum `queryParam:"style=form,explode=true,name=role"`
    
}

type OrgsListMembersRequest struct {
    PathParams OrgsListMembersPathParams 
    QueryParams OrgsListMembersQueryParams 
    
}

type OrgsListMembersResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    SimpleUsers []shared.SimpleUser 
    ValidationError *shared.ValidationError 
    
}

