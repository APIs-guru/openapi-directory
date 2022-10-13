package operations

import (
	"openapi/pkg/models/shared"
)

type AggregatedGetGroupsSummarySortDirectionEnum string

const (
	AggregatedGetGroupsSummarySortDirectionEnumAsc  AggregatedGetGroupsSummarySortDirectionEnum = "asc"
	AggregatedGetGroupsSummarySortDirectionEnumDesc AggregatedGetGroupsSummarySortDirectionEnum = "desc"
)

type AggregatedGetGroupsSummaryStatusEnum string

const (
	AggregatedGetGroupsSummaryStatusEnumDeleted AggregatedGetGroupsSummaryStatusEnum = "deleted"
	AggregatedGetGroupsSummaryStatusEnumActive  AggregatedGetGroupsSummaryStatusEnum = "active"
)

type AggregatedGetGroupsSummaryTimeFrameEnum string

const (
	AggregatedGetGroupsSummaryTimeFrameEnumToday         AggregatedGetGroupsSummaryTimeFrameEnum = "today"
	AggregatedGetGroupsSummaryTimeFrameEnumYesterday     AggregatedGetGroupsSummaryTimeFrameEnum = "yesterday"
	AggregatedGetGroupsSummaryTimeFrameEnumLast7         AggregatedGetGroupsSummaryTimeFrameEnum = "last7"
	AggregatedGetGroupsSummaryTimeFrameEnumLast30        AggregatedGetGroupsSummaryTimeFrameEnum = "last30"
	AggregatedGetGroupsSummaryTimeFrameEnumLastmonth     AggregatedGetGroupsSummaryTimeFrameEnum = "lastmonth"
	AggregatedGetGroupsSummaryTimeFrameEnumCurrentmonth  AggregatedGetGroupsSummaryTimeFrameEnum = "currentmonth"
	AggregatedGetGroupsSummaryTimeFrameEnumPreviousmonth AggregatedGetGroupsSummaryTimeFrameEnum = "previousmonth"
	AggregatedGetGroupsSummaryTimeFrameEnumLast90        AggregatedGetGroupsSummaryTimeFrameEnum = "last90"
	AggregatedGetGroupsSummaryTimeFrameEnumLast120       AggregatedGetGroupsSummaryTimeFrameEnum = "last120"
	AggregatedGetGroupsSummaryTimeFrameEnumLast180       AggregatedGetGroupsSummaryTimeFrameEnum = "last180"
	AggregatedGetGroupsSummaryTimeFrameEnumLast12months  AggregatedGetGroupsSummaryTimeFrameEnum = "last12months"
	AggregatedGetGroupsSummaryTimeFrameEnumLastyear      AggregatedGetGroupsSummaryTimeFrameEnum = "lastyear"
	AggregatedGetGroupsSummaryTimeFrameEnumCurrentyear   AggregatedGetGroupsSummaryTimeFrameEnum = "currentyear"
	AggregatedGetGroupsSummaryTimeFrameEnumBeginning     AggregatedGetGroupsSummaryTimeFrameEnum = "beginning"
	AggregatedGetGroupsSummaryTimeFrameEnumCustom        AggregatedGetGroupsSummaryTimeFrameEnum = "custom"
)

type AggregatedGetGroupsSummaryQueryParams struct {
	Favourite     *bool                                        `queryParam:"style=form,explode=true,name=favourite"`
	FromDay       *string                                      `queryParam:"style=form,explode=true,name=fromDay"`
	Limit         *int32                                       `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                                       `queryParam:"style=form,explode=true,name=offset"`
	SortBy        *string                                      `queryParam:"style=form,explode=true,name=sortBy"`
	SortDirection *AggregatedGetGroupsSummarySortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
	Status        *AggregatedGetGroupsSummaryStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	Tag           *string                                      `queryParam:"style=form,explode=true,name=tag"`
	TextSearch    *string                                      `queryParam:"style=form,explode=true,name=textSearch"`
	TimeFrame     AggregatedGetGroupsSummaryTimeFrameEnum      `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay         *string                                      `queryParam:"style=form,explode=true,name=toDay"`
}

type AggregatedGetGroupsSummaryRequest struct {
	QueryParams AggregatedGetGroupsSummaryQueryParams
}

type AggregatedGetGroupsSummaryResponse struct {
	APICoreDtoAggregatedAggregatedSummaryResult *shared.APICoreDtoAggregatedAggregatedSummaryResult
	ContentType                                 string
	StatusCode                                  int64
}
