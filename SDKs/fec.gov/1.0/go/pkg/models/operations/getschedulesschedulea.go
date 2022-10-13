package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleAContributorTypeEnum string

const (
	GetSchedulesScheduleAContributorTypeEnumIndividual GetSchedulesScheduleAContributorTypeEnum = "individual"
	GetSchedulesScheduleAContributorTypeEnumCommittee  GetSchedulesScheduleAContributorTypeEnum = "committee"
)

type GetSchedulesScheduleARecipientCommitteeDesignationEnum string

const (
	GetSchedulesScheduleARecipientCommitteeDesignationEnumUnknown GetSchedulesScheduleARecipientCommitteeDesignationEnum = ""
	GetSchedulesScheduleARecipientCommitteeDesignationEnumA       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "A"
	GetSchedulesScheduleARecipientCommitteeDesignationEnumJ       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "J"
	GetSchedulesScheduleARecipientCommitteeDesignationEnumP       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "P"
	GetSchedulesScheduleARecipientCommitteeDesignationEnumU       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "U"
	GetSchedulesScheduleARecipientCommitteeDesignationEnumB       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "B"
	GetSchedulesScheduleARecipientCommitteeDesignationEnumD       GetSchedulesScheduleARecipientCommitteeDesignationEnum = "D"
)

type GetSchedulesScheduleARecipientCommitteeOrgTypeEnum string

const (
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumUnknown GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = ""
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumC       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "C"
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumL       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "L"
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumM       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "M"
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumT       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "T"
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumV       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "V"
	GetSchedulesScheduleARecipientCommitteeOrgTypeEnumW       GetSchedulesScheduleARecipientCommitteeOrgTypeEnum = "W"
)

type GetSchedulesScheduleARecipientCommitteeTypeEnum string

const (
	GetSchedulesScheduleARecipientCommitteeTypeEnumUnknown GetSchedulesScheduleARecipientCommitteeTypeEnum = ""
	GetSchedulesScheduleARecipientCommitteeTypeEnumC       GetSchedulesScheduleARecipientCommitteeTypeEnum = "C"
	GetSchedulesScheduleARecipientCommitteeTypeEnumD       GetSchedulesScheduleARecipientCommitteeTypeEnum = "D"
	GetSchedulesScheduleARecipientCommitteeTypeEnumE       GetSchedulesScheduleARecipientCommitteeTypeEnum = "E"
	GetSchedulesScheduleARecipientCommitteeTypeEnumH       GetSchedulesScheduleARecipientCommitteeTypeEnum = "H"
	GetSchedulesScheduleARecipientCommitteeTypeEnumI       GetSchedulesScheduleARecipientCommitteeTypeEnum = "I"
	GetSchedulesScheduleARecipientCommitteeTypeEnumN       GetSchedulesScheduleARecipientCommitteeTypeEnum = "N"
	GetSchedulesScheduleARecipientCommitteeTypeEnumO       GetSchedulesScheduleARecipientCommitteeTypeEnum = "O"
	GetSchedulesScheduleARecipientCommitteeTypeEnumP       GetSchedulesScheduleARecipientCommitteeTypeEnum = "P"
	GetSchedulesScheduleARecipientCommitteeTypeEnumQ       GetSchedulesScheduleARecipientCommitteeTypeEnum = "Q"
	GetSchedulesScheduleARecipientCommitteeTypeEnumS       GetSchedulesScheduleARecipientCommitteeTypeEnum = "S"
	GetSchedulesScheduleARecipientCommitteeTypeEnumU       GetSchedulesScheduleARecipientCommitteeTypeEnum = "U"
	GetSchedulesScheduleARecipientCommitteeTypeEnumV       GetSchedulesScheduleARecipientCommitteeTypeEnum = "V"
	GetSchedulesScheduleARecipientCommitteeTypeEnumW       GetSchedulesScheduleARecipientCommitteeTypeEnum = "W"
	GetSchedulesScheduleARecipientCommitteeTypeEnumX       GetSchedulesScheduleARecipientCommitteeTypeEnum = "X"
	GetSchedulesScheduleARecipientCommitteeTypeEnumY       GetSchedulesScheduleARecipientCommitteeTypeEnum = "Y"
	GetSchedulesScheduleARecipientCommitteeTypeEnumZ       GetSchedulesScheduleARecipientCommitteeTypeEnum = "Z"
)

type GetSchedulesScheduleAQueryParams struct {
	APIKey                        string                                                   `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID                   []string                                                 `queryParam:"style=form,explode=true,name=committee_id"`
	ContributorCity               []string                                                 `queryParam:"style=form,explode=true,name=contributor_city"`
	ContributorEmployer           []string                                                 `queryParam:"style=form,explode=true,name=contributor_employer"`
	ContributorID                 []string                                                 `queryParam:"style=form,explode=true,name=contributor_id"`
	ContributorName               []string                                                 `queryParam:"style=form,explode=true,name=contributor_name"`
	ContributorOccupation         []string                                                 `queryParam:"style=form,explode=true,name=contributor_occupation"`
	ContributorState              []string                                                 `queryParam:"style=form,explode=true,name=contributor_state"`
	ContributorType               []GetSchedulesScheduleAContributorTypeEnum               `queryParam:"style=form,explode=true,name=contributor_type"`
	ContributorZip                []string                                                 `queryParam:"style=form,explode=true,name=contributor_zip"`
	ImageNumber                   []string                                                 `queryParam:"style=form,explode=true,name=image_number"`
	IsIndividual                  *bool                                                    `queryParam:"style=form,explode=true,name=is_individual"`
	LastContributionReceiptAmount *float32                                                 `queryParam:"style=form,explode=true,name=last_contribution_receipt_amount"`
	LastContributionReceiptDate   *time.Time                                               `queryParam:"style=form,explode=true,name=last_contribution_receipt_date"`
	LastIndex                     *int32                                                   `queryParam:"style=form,explode=true,name=last_index"`
	LineNumber                    *string                                                  `queryParam:"style=form,explode=true,name=line_number"`
	MaxAmount                     *string                                                  `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate                       *time.Time                                               `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber                *string                                                  `queryParam:"style=form,explode=true,name=max_image_number"`
	MaxLoadDate                   *time.Time                                               `queryParam:"style=form,explode=true,name=max_load_date"`
	MinAmount                     *string                                                  `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate                       *time.Time                                               `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber                *string                                                  `queryParam:"style=form,explode=true,name=min_image_number"`
	MinLoadDate                   *time.Time                                               `queryParam:"style=form,explode=true,name=min_load_date"`
	PerPage                       *int32                                                   `queryParam:"style=form,explode=true,name=per_page"`
	RecipientCommitteeDesignation []GetSchedulesScheduleARecipientCommitteeDesignationEnum `queryParam:"style=form,explode=true,name=recipient_committee_designation"`
	RecipientCommitteeOrgType     []GetSchedulesScheduleARecipientCommitteeOrgTypeEnum     `queryParam:"style=form,explode=true,name=recipient_committee_org_type"`
	RecipientCommitteeType        []GetSchedulesScheduleARecipientCommitteeTypeEnum        `queryParam:"style=form,explode=true,name=recipient_committee_type"`
	Sort                          *string                                                  `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                  *bool                                                    `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                  *bool                                                    `queryParam:"style=form,explode=true,name=sort_null_only"`
	TwoYearTransactionPeriod      []int32                                                  `queryParam:"style=form,explode=true,name=two_year_transaction_period"`
}

type GetSchedulesScheduleARequest struct {
	QueryParams GetSchedulesScheduleAQueryParams
}

type GetSchedulesScheduleAResponse struct {
	ContentType   string
	ScheduleAPage *shared.ScheduleAPage
	StatusCode    int64
}
