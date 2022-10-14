package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetElectionDatesOfficeSoughtEnum string

const (
	GetElectionDatesOfficeSoughtEnumH GetElectionDatesOfficeSoughtEnum = "H"
	GetElectionDatesOfficeSoughtEnumS GetElectionDatesOfficeSoughtEnum = "S"
	GetElectionDatesOfficeSoughtEnumP GetElectionDatesOfficeSoughtEnum = "P"
)

type GetElectionDatesQueryParams struct {
	APIKey                string                             `queryParam:"style=form,explode=true,name=api_key"`
	ElectionDistrict      []string                           `queryParam:"style=form,explode=true,name=election_district"`
	ElectionParty         []string                           `queryParam:"style=form,explode=true,name=election_party"`
	ElectionState         []string                           `queryParam:"style=form,explode=true,name=election_state"`
	ElectionTypeID        []string                           `queryParam:"style=form,explode=true,name=election_type_id"`
	ElectionYear          []string                           `queryParam:"style=form,explode=true,name=election_year"`
	MaxCreateDate         *time.Time                         `queryParam:"style=form,explode=true,name=max_create_date"`
	MaxElectionDate       *time.Time                         `queryParam:"style=form,explode=true,name=max_election_date"`
	MaxPrimaryGeneralDate *time.Time                         `queryParam:"style=form,explode=true,name=max_primary_general_date"`
	MaxUpdateDate         *time.Time                         `queryParam:"style=form,explode=true,name=max_update_date"`
	MinCreateDate         *time.Time                         `queryParam:"style=form,explode=true,name=min_create_date"`
	MinElectionDate       *time.Time                         `queryParam:"style=form,explode=true,name=min_election_date"`
	MinPrimaryGeneralDate *time.Time                         `queryParam:"style=form,explode=true,name=min_primary_general_date"`
	MinUpdateDate         *time.Time                         `queryParam:"style=form,explode=true,name=min_update_date"`
	OfficeSought          []GetElectionDatesOfficeSoughtEnum `queryParam:"style=form,explode=true,name=office_sought"`
	Page                  *int32                             `queryParam:"style=form,explode=true,name=page"`
	PerPage               *int32                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort                  *string                            `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull          *bool                              `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly          *bool                              `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast         *bool                              `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetElectionDatesRequest struct {
	QueryParams GetElectionDatesQueryParams
}

type GetElectionDatesDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo    `json:"pagination,omitempty"`
	Results    []shared.ElectionDate `json:"results,omitempty"`
}

type GetElectionDatesResponse struct {
	ContentType                                  string
	GetElectionDatesDefaultApplicationJSONObject *GetElectionDatesDefaultApplicationJSON
	StatusCode                                   int64
}
