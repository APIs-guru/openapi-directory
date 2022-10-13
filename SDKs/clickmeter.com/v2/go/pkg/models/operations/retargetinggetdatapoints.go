package operations

import (
	"openapi/pkg/models/shared"
)

type RetargetingGetDatapointsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type RetargetingGetDatapointsSortDirectionEnum string

const (
	RetargetingGetDatapointsSortDirectionEnumAsc  RetargetingGetDatapointsSortDirectionEnum = "asc"
	RetargetingGetDatapointsSortDirectionEnumDesc RetargetingGetDatapointsSortDirectionEnum = "desc"
)

type RetargetingGetDatapointsStatusEnum string

const (
	RetargetingGetDatapointsStatusEnumDeleted RetargetingGetDatapointsStatusEnum = "deleted"
	RetargetingGetDatapointsStatusEnumActive  RetargetingGetDatapointsStatusEnum = "active"
	RetargetingGetDatapointsStatusEnumPaused  RetargetingGetDatapointsStatusEnum = "paused"
	RetargetingGetDatapointsStatusEnumSpam    RetargetingGetDatapointsStatusEnum = "spam"
)

type RetargetingGetDatapointsQueryParams struct {
	CreatedAfter  *string                                    `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *string                                    `queryParam:"style=form,explode=true,name=createdBefore"`
	Limit         *int32                                     `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                                     `queryParam:"style=form,explode=true,name=offset"`
	OnlyFavorites *bool                                      `queryParam:"style=form,explode=true,name=onlyFavorites"`
	SortBy        *string                                    `queryParam:"style=form,explode=true,name=sortBy"`
	SortDirection *RetargetingGetDatapointsSortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
	Status        *RetargetingGetDatapointsStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	Tags          *string                                    `queryParam:"style=form,explode=true,name=tags"`
	TextSearch    *string                                    `queryParam:"style=form,explode=true,name=textSearch"`
}

type RetargetingGetDatapointsRequest struct {
	PathParams  RetargetingGetDatapointsPathParams
	QueryParams RetargetingGetDatapointsQueryParams
}

type RetargetingGetDatapointsResponse struct {
	APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64
	ContentType                                                          string
	StatusCode                                                           int64
}
