package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitteeCommitteeIDHistoryPathParams struct {
	CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
}

type GetCommitteeCommitteeIDHistoryDesignationEnum string

const (
	GetCommitteeCommitteeIDHistoryDesignationEnumUnknown GetCommitteeCommitteeIDHistoryDesignationEnum = ""
	GetCommitteeCommitteeIDHistoryDesignationEnumA       GetCommitteeCommitteeIDHistoryDesignationEnum = "A"
	GetCommitteeCommitteeIDHistoryDesignationEnumJ       GetCommitteeCommitteeIDHistoryDesignationEnum = "J"
	GetCommitteeCommitteeIDHistoryDesignationEnumP       GetCommitteeCommitteeIDHistoryDesignationEnum = "P"
	GetCommitteeCommitteeIDHistoryDesignationEnumU       GetCommitteeCommitteeIDHistoryDesignationEnum = "U"
	GetCommitteeCommitteeIDHistoryDesignationEnumB       GetCommitteeCommitteeIDHistoryDesignationEnum = "B"
	GetCommitteeCommitteeIDHistoryDesignationEnumD       GetCommitteeCommitteeIDHistoryDesignationEnum = "D"
)

type GetCommitteeCommitteeIDHistoryQueryParams struct {
	APIKey        string                                          `queryParam:"style=form,explode=true,name=api_key"`
	Designation   []GetCommitteeCommitteeIDHistoryDesignationEnum `queryParam:"style=form,explode=true,name=designation"`
	ElectionFull  *bool                                           `queryParam:"style=form,explode=true,name=election_full"`
	Page          *int32                                          `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                                          `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                                         `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                                           `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                                           `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                                           `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetCommitteeCommitteeIDHistoryRequest struct {
	PathParams  GetCommitteeCommitteeIDHistoryPathParams
	QueryParams GetCommitteeCommitteeIDHistoryQueryParams
}

type GetCommitteeCommitteeIDHistoryResponse struct {
	CommitteeHistoryPage *shared.CommitteeHistoryPage
	ContentType          string
	StatusCode           int64
}
