package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdvancedTeamSeasonStatsQueryParams struct {
	EndWeek            *int64  `queryParam:"style=form,explode=true,name=endWeek"`
	ExcludeGarbageTime *bool   `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
	StartWeek          *int64  `queryParam:"style=form,explode=true,name=startWeek"`
	Team               *string `queryParam:"style=form,explode=true,name=team"`
	Year               *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetAdvancedTeamSeasonStatsRequest struct {
	QueryParams GetAdvancedTeamSeasonStatsQueryParams
}

type GetAdvancedTeamSeasonStatsResponse struct {
	AdvancedSeasonStats []shared.AdvancedSeasonStat
	ContentType         string
	StatusCode          int64
}
