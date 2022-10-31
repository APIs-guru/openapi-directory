package operations

import (
	"openapi/pkg/models/shared"
)

type AggregatedGetConversionsSummarySortDirectionEnum string

const (
	AggregatedGetConversionsSummarySortDirectionEnumAsc  AggregatedGetConversionsSummarySortDirectionEnum = "asc"
	AggregatedGetConversionsSummarySortDirectionEnumDesc AggregatedGetConversionsSummarySortDirectionEnum = "desc"
)

type AggregatedGetConversionsSummaryStatusEnum string

const (
	AggregatedGetConversionsSummaryStatusEnumDeleted AggregatedGetConversionsSummaryStatusEnum = "deleted"
	AggregatedGetConversionsSummaryStatusEnumActive  AggregatedGetConversionsSummaryStatusEnum = "active"
)

type AggregatedGetConversionsSummaryTimeFrameEnum string

const (
	AggregatedGetConversionsSummaryTimeFrameEnumToday         AggregatedGetConversionsSummaryTimeFrameEnum = "today"
	AggregatedGetConversionsSummaryTimeFrameEnumYesterday     AggregatedGetConversionsSummaryTimeFrameEnum = "yesterday"
	AggregatedGetConversionsSummaryTimeFrameEnumLast7         AggregatedGetConversionsSummaryTimeFrameEnum = "last7"
	AggregatedGetConversionsSummaryTimeFrameEnumLast30        AggregatedGetConversionsSummaryTimeFrameEnum = "last30"
	AggregatedGetConversionsSummaryTimeFrameEnumLastmonth     AggregatedGetConversionsSummaryTimeFrameEnum = "lastmonth"
	AggregatedGetConversionsSummaryTimeFrameEnumCurrentmonth  AggregatedGetConversionsSummaryTimeFrameEnum = "currentmonth"
	AggregatedGetConversionsSummaryTimeFrameEnumPreviousmonth AggregatedGetConversionsSummaryTimeFrameEnum = "previousmonth"
	AggregatedGetConversionsSummaryTimeFrameEnumLast90        AggregatedGetConversionsSummaryTimeFrameEnum = "last90"
	AggregatedGetConversionsSummaryTimeFrameEnumLast120       AggregatedGetConversionsSummaryTimeFrameEnum = "last120"
	AggregatedGetConversionsSummaryTimeFrameEnumLast180       AggregatedGetConversionsSummaryTimeFrameEnum = "last180"
	AggregatedGetConversionsSummaryTimeFrameEnumLast12months  AggregatedGetConversionsSummaryTimeFrameEnum = "last12months"
	AggregatedGetConversionsSummaryTimeFrameEnumLastyear      AggregatedGetConversionsSummaryTimeFrameEnum = "lastyear"
	AggregatedGetConversionsSummaryTimeFrameEnumCurrentyear   AggregatedGetConversionsSummaryTimeFrameEnum = "currentyear"
	AggregatedGetConversionsSummaryTimeFrameEnumBeginning     AggregatedGetConversionsSummaryTimeFrameEnum = "beginning"
	AggregatedGetConversionsSummaryTimeFrameEnumCustom        AggregatedGetConversionsSummaryTimeFrameEnum = "custom"
)

type AggregatedGetConversionsSummaryQueryParams struct {
	FromDay       *string                                           `queryParam:"style=form,explode=true,name=fromDay"`
	Limit         *int32                                            `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                                            `queryParam:"style=form,explode=true,name=offset"`
	SortBy        *string                                           `queryParam:"style=form,explode=true,name=sortBy"`
	SortDirection *AggregatedGetConversionsSummarySortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
	Status        *AggregatedGetConversionsSummaryStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	TextSearch    *string                                           `queryParam:"style=form,explode=true,name=textSearch"`
	TimeFrame     AggregatedGetConversionsSummaryTimeFrameEnum      `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay         *string                                           `queryParam:"style=form,explode=true,name=toDay"`
}

type AggregatedGetConversionsSummaryRequest struct {
	QueryParams AggregatedGetConversionsSummaryQueryParams
}

type AggregatedGetConversionsSummaryResponse struct {
	APICoreDtoAggregatedAggregatedSummaryResult *shared.APICoreDtoAggregatedAggregatedSummaryResult
	ContentType                                 string
	StatusCode                                  int64
}
