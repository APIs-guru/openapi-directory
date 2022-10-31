package operations

import (
"openapi/pkg/models/shared")

type ReposListForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}


type ReposListForOrgDirectionEnum string

const (
    ReposListForOrgDirectionEnumAsc ReposListForOrgDirectionEnum = "asc"
ReposListForOrgDirectionEnumDesc ReposListForOrgDirectionEnum = "desc"
)



type ReposListForOrgSortEnum string

const (
    ReposListForOrgSortEnumCreated ReposListForOrgSortEnum = "created"
ReposListForOrgSortEnumUpdated ReposListForOrgSortEnum = "updated"
ReposListForOrgSortEnumPushed ReposListForOrgSortEnum = "pushed"
ReposListForOrgSortEnumFullName ReposListForOrgSortEnum = "full_name"
)



type ReposListForOrgTypeEnum string

const (
    ReposListForOrgTypeEnumAll ReposListForOrgTypeEnum = "all"
ReposListForOrgTypeEnumPublic ReposListForOrgTypeEnum = "public"
ReposListForOrgTypeEnumPrivate ReposListForOrgTypeEnum = "private"
ReposListForOrgTypeEnumForks ReposListForOrgTypeEnum = "forks"
ReposListForOrgTypeEnumSources ReposListForOrgTypeEnum = "sources"
ReposListForOrgTypeEnumMember ReposListForOrgTypeEnum = "member"
ReposListForOrgTypeEnumInternal ReposListForOrgTypeEnum = "internal"
)


type ReposListForOrgQueryParams struct {
    Direction *ReposListForOrgDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *ReposListForOrgSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Type *ReposListForOrgTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type ReposListForOrgRequest struct {
    PathParams ReposListForOrgPathParams 
    QueryParams ReposListForOrgQueryParams 
    
}

type ReposListForOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MinimalRepositories []shared.MinimalRepository 
    
}

