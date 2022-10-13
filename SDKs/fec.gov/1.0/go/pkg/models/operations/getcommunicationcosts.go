package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCommunicationCostsSupportOpposeIndicatorEnum string

const (
	GetCommunicationCostsSupportOpposeIndicatorEnumS GetCommunicationCostsSupportOpposeIndicatorEnum = "S"
	GetCommunicationCostsSupportOpposeIndicatorEnumO GetCommunicationCostsSupportOpposeIndicatorEnum = "O"
)

type GetCommunicationCostsQueryParams struct {
	APIKey                 string                                            `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID            []string                                          `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID            []string                                          `queryParam:"style=form,explode=true,name=committee_id"`
	ImageNumber            []string                                          `queryParam:"style=form,explode=true,name=image_number"`
	LineNumber             *string                                           `queryParam:"style=form,explode=true,name=line_number"`
	MaxAmount              *string                                           `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate                *time.Time                                        `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber         *string                                           `queryParam:"style=form,explode=true,name=max_image_number"`
	MinAmount              *string                                           `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate                *time.Time                                        `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber         *string                                           `queryParam:"style=form,explode=true,name=min_image_number"`
	Page                   *int32                                            `queryParam:"style=form,explode=true,name=page"`
	PerPage                *int32                                            `queryParam:"style=form,explode=true,name=per_page"`
	Sort                   *string                                           `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull           *bool                                             `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly           *bool                                             `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast          *bool                                             `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	SupportOpposeIndicator []GetCommunicationCostsSupportOpposeIndicatorEnum `queryParam:"style=form,explode=true,name=support_oppose_indicator"`
}

type GetCommunicationCostsRequest struct {
	QueryParams GetCommunicationCostsQueryParams
}

type GetCommunicationCostsResponse struct {
	CommunicationCostPage *shared.CommunicationCostPage
	ContentType           string
	StatusCode            int64
}
