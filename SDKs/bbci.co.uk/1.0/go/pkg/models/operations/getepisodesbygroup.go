package operations

import (
	"openapi/pkg/models/shared"
)

type GetEpisodesByGroupPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetEpisodesByGroupQueryParams struct {
	Availability      shared.AvailabilityEnum  `queryParam:"style=form,explode=true,name=availability"`
	InitialChildCount int64                    `queryParam:"style=form,explode=true,name=initial_child_count"`
	Mixin             []string                 `queryParam:"style=form,explode=true,name=mixin"`
	Page              int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage           int64                    `queryParam:"style=form,explode=true,name=per_page"`
	Rights            shared.RightsEnum        `queryParam:"style=form,explode=true,name=rights"`
	Sort              string                   `queryParam:"style=form,explode=true,name=sort"`
	SortDirection     shared.SortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
}

type GetEpisodesByGroupRequest struct {
	PathParams  GetEpisodesByGroupPathParams
	QueryParams GetEpisodesByGroupQueryParams
}

type GetEpisodesByGroupResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
