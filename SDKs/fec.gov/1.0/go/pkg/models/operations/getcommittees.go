package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCommitteesCommitteeTypeEnum string

const (
	GetCommitteesCommitteeTypeEnumUnknown GetCommitteesCommitteeTypeEnum = ""
	GetCommitteesCommitteeTypeEnumC       GetCommitteesCommitteeTypeEnum = "C"
	GetCommitteesCommitteeTypeEnumD       GetCommitteesCommitteeTypeEnum = "D"
	GetCommitteesCommitteeTypeEnumE       GetCommitteesCommitteeTypeEnum = "E"
	GetCommitteesCommitteeTypeEnumH       GetCommitteesCommitteeTypeEnum = "H"
	GetCommitteesCommitteeTypeEnumI       GetCommitteesCommitteeTypeEnum = "I"
	GetCommitteesCommitteeTypeEnumN       GetCommitteesCommitteeTypeEnum = "N"
	GetCommitteesCommitteeTypeEnumO       GetCommitteesCommitteeTypeEnum = "O"
	GetCommitteesCommitteeTypeEnumP       GetCommitteesCommitteeTypeEnum = "P"
	GetCommitteesCommitteeTypeEnumQ       GetCommitteesCommitteeTypeEnum = "Q"
	GetCommitteesCommitteeTypeEnumS       GetCommitteesCommitteeTypeEnum = "S"
	GetCommitteesCommitteeTypeEnumU       GetCommitteesCommitteeTypeEnum = "U"
	GetCommitteesCommitteeTypeEnumV       GetCommitteesCommitteeTypeEnum = "V"
	GetCommitteesCommitteeTypeEnumW       GetCommitteesCommitteeTypeEnum = "W"
	GetCommitteesCommitteeTypeEnumX       GetCommitteesCommitteeTypeEnum = "X"
	GetCommitteesCommitteeTypeEnumY       GetCommitteesCommitteeTypeEnum = "Y"
	GetCommitteesCommitteeTypeEnumZ       GetCommitteesCommitteeTypeEnum = "Z"
)

type GetCommitteesDesignationEnum string

const (
	GetCommitteesDesignationEnumUnknown GetCommitteesDesignationEnum = ""
	GetCommitteesDesignationEnumA       GetCommitteesDesignationEnum = "A"
	GetCommitteesDesignationEnumJ       GetCommitteesDesignationEnum = "J"
	GetCommitteesDesignationEnumP       GetCommitteesDesignationEnum = "P"
	GetCommitteesDesignationEnumU       GetCommitteesDesignationEnum = "U"
	GetCommitteesDesignationEnumB       GetCommitteesDesignationEnum = "B"
	GetCommitteesDesignationEnumD       GetCommitteesDesignationEnum = "D"
)

type GetCommitteesFilingFrequencyEnum string

const (
	GetCommitteesFilingFrequencyEnumUnknown GetCommitteesFilingFrequencyEnum = ""
	GetCommitteesFilingFrequencyEnumA       GetCommitteesFilingFrequencyEnum = "A"
	GetCommitteesFilingFrequencyEnumM       GetCommitteesFilingFrequencyEnum = "M"
	GetCommitteesFilingFrequencyEnumN       GetCommitteesFilingFrequencyEnum = "N"
	GetCommitteesFilingFrequencyEnumQ       GetCommitteesFilingFrequencyEnum = "Q"
	GetCommitteesFilingFrequencyEnumT       GetCommitteesFilingFrequencyEnum = "T"
	GetCommitteesFilingFrequencyEnumW       GetCommitteesFilingFrequencyEnum = "W"
	GetCommitteesFilingFrequencyEnumMinusA  GetCommitteesFilingFrequencyEnum = "-A"
	GetCommitteesFilingFrequencyEnumMinusT  GetCommitteesFilingFrequencyEnum = "-T"
)

type GetCommitteesOrganizationTypeEnum string

const (
	GetCommitteesOrganizationTypeEnumUnknown GetCommitteesOrganizationTypeEnum = ""
	GetCommitteesOrganizationTypeEnumC       GetCommitteesOrganizationTypeEnum = "C"
	GetCommitteesOrganizationTypeEnumL       GetCommitteesOrganizationTypeEnum = "L"
	GetCommitteesOrganizationTypeEnumM       GetCommitteesOrganizationTypeEnum = "M"
	GetCommitteesOrganizationTypeEnumT       GetCommitteesOrganizationTypeEnum = "T"
	GetCommitteesOrganizationTypeEnumV       GetCommitteesOrganizationTypeEnum = "V"
	GetCommitteesOrganizationTypeEnumW       GetCommitteesOrganizationTypeEnum = "W"
)

type GetCommitteesQueryParams struct {
	APIKey             string                              `queryParam:"style=form,explode=true,name=api_key"`
	CandidateID        []string                            `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID        []string                            `queryParam:"style=form,explode=true,name=committee_id"`
	CommitteeType      []GetCommitteesCommitteeTypeEnum    `queryParam:"style=form,explode=true,name=committee_type"`
	Cycle              []int32                             `queryParam:"style=form,explode=true,name=cycle"`
	Designation        []GetCommitteesDesignationEnum      `queryParam:"style=form,explode=true,name=designation"`
	FilingFrequency    []GetCommitteesFilingFrequencyEnum  `queryParam:"style=form,explode=true,name=filing_frequency"`
	MaxFirstFileDate   *time.Time                          `queryParam:"style=form,explode=true,name=max_first_file_date"`
	MaxLastF1Date      *time.Time                          `queryParam:"style=form,explode=true,name=max_last_f1_date"`
	MinFirstFileDate   *time.Time                          `queryParam:"style=form,explode=true,name=min_first_file_date"`
	MinLastF1Date      *time.Time                          `queryParam:"style=form,explode=true,name=min_last_f1_date"`
	OrganizationType   []GetCommitteesOrganizationTypeEnum `queryParam:"style=form,explode=true,name=organization_type"`
	Page               *int32                              `queryParam:"style=form,explode=true,name=page"`
	Party              []string                            `queryParam:"style=form,explode=true,name=party"`
	PerPage            *int32                              `queryParam:"style=form,explode=true,name=per_page"`
	Q                  []string                            `queryParam:"style=form,explode=true,name=q"`
	Sort               *string                             `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull       *bool                               `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly       *bool                               `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast      *bool                               `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	SponsorCandidateID []string                            `queryParam:"style=form,explode=true,name=sponsor_candidate_id"`
	State              []string                            `queryParam:"style=form,explode=true,name=state"`
	TreasurerName      []string                            `queryParam:"style=form,explode=true,name=treasurer_name"`
	Year               []int32                             `queryParam:"style=form,explode=true,name=year"`
}

type GetCommitteesRequest struct {
	QueryParams GetCommitteesQueryParams
}

type GetCommitteesResponse struct {
	CommitteePage *shared.CommitteePage
	ContentType   string
	StatusCode    int64
}
