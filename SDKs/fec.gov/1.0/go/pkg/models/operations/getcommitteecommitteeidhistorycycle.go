package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitteeCommitteeIDHistoryCyclePathParams struct {
	CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
	Cycle       int32  `pathParam:"style=simple,explode=false,name=cycle"`
}

type GetCommitteeCommitteeIDHistoryCycleDesignationEnum string

const (
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumUnknown GetCommitteeCommitteeIDHistoryCycleDesignationEnum = ""
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumA       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "A"
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumJ       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "J"
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumP       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "P"
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumU       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "U"
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumB       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "B"
	GetCommitteeCommitteeIDHistoryCycleDesignationEnumD       GetCommitteeCommitteeIDHistoryCycleDesignationEnum = "D"
)

type GetCommitteeCommitteeIDHistoryCycleQueryParams struct {
	APIKey        string                                               `queryParam:"style=form,explode=true,name=api_key"`
	Designation   []GetCommitteeCommitteeIDHistoryCycleDesignationEnum `queryParam:"style=form,explode=true,name=designation"`
	ElectionFull  *bool                                                `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32                                               `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                                               `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                                              `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                                                `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                                                `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                                                `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCommitteeCommitteeIDHistoryCycleRequest struct {
	PathParams  GetCommitteeCommitteeIDHistoryCyclePathParams
	QueryParams GetCommitteeCommitteeIDHistoryCycleQueryParams
}

type GetCommitteeCommitteeIDHistoryCycleResponse struct {
	CommitteeHistoryPage *shared.CommitteeHistoryPage
	ContentType          string
	StatusCode           int64
}
