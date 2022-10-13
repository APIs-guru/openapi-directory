package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleASubIDPathParams struct {
	SubID string `pathParam:"style=simple,explode=false,name=sub_id"`
}

type GetSchedulesScheduleASubIDContributorTypeEnum string

const (
	GetSchedulesScheduleASubIDContributorTypeEnumIndividual GetSchedulesScheduleASubIDContributorTypeEnum = "individual"
	GetSchedulesScheduleASubIDContributorTypeEnumCommittee  GetSchedulesScheduleASubIDContributorTypeEnum = "committee"
)

type GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum string

const (
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumUnknown GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = ""
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumA       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "A"
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumJ       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "J"
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumP       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "P"
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumU       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "U"
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumB       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "B"
	GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnumD       GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum = "D"
)

type GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum string

const (
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumUnknown GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = ""
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumC       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "C"
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumL       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "L"
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumM       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "M"
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumT       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "T"
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumV       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "V"
	GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnumW       GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum = "W"
)

type GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum string

const (
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumUnknown GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = ""
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumC       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "C"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumD       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "D"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumE       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "E"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumH       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "H"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumI       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "I"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumN       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "N"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumO       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "O"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumP       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "P"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumQ       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "Q"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumS       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "S"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumU       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "U"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumV       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "V"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumW       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "W"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumX       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "X"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumY       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "Y"
	GetSchedulesScheduleASubIDRecipientCommitteeTypeEnumZ       GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum = "Z"
)

type GetSchedulesScheduleASubIDQueryParams struct {
	APIKey                        string                                                        `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID                   []string                                                      `queryParam:"style=form,explode=true,name=committee_id"`
	ContributorCity               []string                                                      `queryParam:"style=form,explode=true,name=contributor_city"`
	ContributorEmployer           []string                                                      `queryParam:"style=form,explode=true,name=contributor_employer"`
	ContributorID                 []string                                                      `queryParam:"style=form,explode=true,name=contributor_id"`
	ContributorName               []string                                                      `queryParam:"style=form,explode=true,name=contributor_name"`
	ContributorOccupation         []string                                                      `queryParam:"style=form,explode=true,name=contributor_occupation"`
	ContributorState              []string                                                      `queryParam:"style=form,explode=true,name=contributor_state"`
	ContributorType               []GetSchedulesScheduleASubIDContributorTypeEnum               `queryParam:"style=form,explode=true,name=contributor_type"`
	ContributorZip                []string                                                      `queryParam:"style=form,explode=true,name=contributor_zip"`
	ImageNumber                   []string                                                      `queryParam:"style=form,explode=true,name=image_number"`
	IsIndividual                  *bool                                                         `queryParam:"style=form,explode=true,name=is_individual"`
	LastContributionReceiptAmount *float32                                                      `queryParam:"style=form,explode=true,name=last_contribution_receipt_amount"`
	LastContributionReceiptDate   *time.Time                                                    `queryParam:"style=form,explode=true,name=last_contribution_receipt_date"`
	LastIndex                     *int32                                                        `queryParam:"style=form,explode=true,name=last_index"`
	LineNumber                    *string                                                       `queryParam:"style=form,explode=true,name=line_number"`
	MaxAmount                     *string                                                       `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate                       *time.Time                                                    `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber                *string                                                       `queryParam:"style=form,explode=true,name=max_image_number"`
	MaxLoadDate                   *time.Time                                                    `queryParam:"style=form,explode=true,name=max_load_date"`
	MinAmount                     *string                                                       `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate                       *time.Time                                                    `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber                *string                                                       `queryParam:"style=form,explode=true,name=min_image_number"`
	MinLoadDate                   *time.Time                                                    `queryParam:"style=form,explode=true,name=min_load_date"`
	PerPage                       *int32                                                        `queryParam:"style=form,explode=true,name=per_page"`
	RecipientCommitteeDesignation []GetSchedulesScheduleASubIDRecipientCommitteeDesignationEnum `queryParam:"style=form,explode=true,name=recipient_committee_designation"`
	RecipientCommitteeOrgType     []GetSchedulesScheduleASubIDRecipientCommitteeOrgTypeEnum     `queryParam:"style=form,explode=true,name=recipient_committee_org_type"`
	RecipientCommitteeType        []GetSchedulesScheduleASubIDRecipientCommitteeTypeEnum        `queryParam:"style=form,explode=true,name=recipient_committee_type"`
	Sort                          *string                                                       `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                  *bool                                                         `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                  *bool                                                         `queryParam:"style=form,explode=true,name=sort_null_only"`
	TwoYearTransactionPeriod      []int32                                                       `queryParam:"style=form,explode=true,name=two_year_transaction_period"`
}

type GetSchedulesScheduleASubIDRequest struct {
	PathParams  GetSchedulesScheduleASubIDPathParams
	QueryParams GetSchedulesScheduleASubIDQueryParams
}

type GetSchedulesScheduleASubIDResponse struct {
	ContentType   string
	ScheduleAPage *shared.ScheduleAPage
	StatusCode    int64
}
