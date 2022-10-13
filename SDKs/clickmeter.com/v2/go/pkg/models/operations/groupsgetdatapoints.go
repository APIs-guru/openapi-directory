package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetDatapointsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GroupsGetDatapointsSortDirectionEnum string

const (
	GroupsGetDatapointsSortDirectionEnumAsc  GroupsGetDatapointsSortDirectionEnum = "asc"
	GroupsGetDatapointsSortDirectionEnumDesc GroupsGetDatapointsSortDirectionEnum = "desc"
)

type GroupsGetDatapointsStatusEnum string

const (
	GroupsGetDatapointsStatusEnumDeleted GroupsGetDatapointsStatusEnum = "deleted"
	GroupsGetDatapointsStatusEnumActive  GroupsGetDatapointsStatusEnum = "active"
	GroupsGetDatapointsStatusEnumPaused  GroupsGetDatapointsStatusEnum = "paused"
	GroupsGetDatapointsStatusEnumSpam    GroupsGetDatapointsStatusEnum = "spam"
)

type GroupsGetDatapointsTypeEnum string

const (
	GroupsGetDatapointsTypeEnumTp GroupsGetDatapointsTypeEnum = "tp"
	GroupsGetDatapointsTypeEnumTl GroupsGetDatapointsTypeEnum = "tl"
)

type GroupsGetDatapointsQueryParams struct {
	CreatedAfter  *string                               `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *string                               `queryParam:"style=form,explode=true,name=createdBefore"`
	Limit         *int32                                `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                                `queryParam:"style=form,explode=true,name=offset"`
	OnlyFavorites *bool                                 `queryParam:"style=form,explode=true,name=onlyFavorites"`
	SortBy        *string                               `queryParam:"style=form,explode=true,name=sortBy"`
	SortDirection *GroupsGetDatapointsSortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
	Status        *GroupsGetDatapointsStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	Tags          *string                               `queryParam:"style=form,explode=true,name=tags"`
	TextSearch    *string                               `queryParam:"style=form,explode=true,name=textSearch"`
	Type          *GroupsGetDatapointsTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type GroupsGetDatapointsRequest struct {
	PathParams  GroupsGetDatapointsPathParams
	QueryParams GroupsGetDatapointsQueryParams
}

type GroupsGetDatapointsResponse struct {
	APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64
	ContentType                                                          string
	StatusCode                                                           int64
}
