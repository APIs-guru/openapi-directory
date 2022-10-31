package operations

import (
"openapi/pkg/models/shared")


type ListGroupsEmbargoedEnum string

const (
    ListGroupsEmbargoedEnumInclude ListGroupsEmbargoedEnum = "include"
ListGroupsEmbargoedEnumExclude ListGroupsEmbargoedEnum = "exclude"
ListGroupsEmbargoedEnumOnly ListGroupsEmbargoedEnum = "only"
)



type ListGroupsGroupTypeEnum string

const (
    ListGroupsGroupTypeEnumCollection ListGroupsGroupTypeEnum = "collection"
ListGroupsGroupTypeEnumFranchise ListGroupsGroupTypeEnum = "franchise"
ListGroupsGroupTypeEnumGallery ListGroupsGroupTypeEnum = "gallery"
ListGroupsGroupTypeEnumSeason ListGroupsGroupTypeEnum = "season"
)



type ListGroupsMixinEnum string

const (
    ListGroupsMixinEnumAlternateImages ListGroupsMixinEnum = "alternate_images"
ListGroupsMixinEnumGroupFor ListGroupsMixinEnum = "group_for"
ListGroupsMixinEnumImages ListGroupsMixinEnum = "images"
ListGroupsMixinEnumRelatedLinks ListGroupsMixinEnum = "related_links"
)



type ListGroupsSortEnum string

const (
    ListGroupsSortEnumPid ListGroupsSortEnum = "pid"
)



type ListGroupsSortDirectionEnum string

const (
    ListGroupsSortDirectionEnumDescending ListGroupsSortDirectionEnum = "descending"
)


type ListGroupsQueryParams struct {
    Embargoed *ListGroupsEmbargoedEnum `queryParam:"style=form,explode=true,name=embargoed"`
    ForDescendantsOf *string `queryParam:"style=form,explode=true,name=for_descendants_of"`
    ForProgramme *string `queryParam:"style=form,explode=true,name=for_programme"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    GroupType []ListGroupsGroupTypeEnum `queryParam:"style=form,explode=true,name=group_type"`
    Member *string `queryParam:"style=form,explode=true,name=member"`
    Mixin []ListGroupsMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *ListGroupsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection *ListGroupsSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    
}

type ListGroupsRequest struct {
    QueryParams ListGroupsQueryParams 
    
}

type ListGroupsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

