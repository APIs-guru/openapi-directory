package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSchedulesScheduleBSpenderCommitteeDesignationEnum string

const (
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumUnknown GetSchedulesScheduleBSpenderCommitteeDesignationEnum = ""
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumA       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "A"
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumJ       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "J"
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumP       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "P"
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumU       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "U"
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumB       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "B"
	GetSchedulesScheduleBSpenderCommitteeDesignationEnumD       GetSchedulesScheduleBSpenderCommitteeDesignationEnum = "D"
)

type GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum string

const (
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumUnknown GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = ""
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumC       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "C"
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumL       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "L"
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumM       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "M"
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumT       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "T"
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumV       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "V"
	GetSchedulesScheduleBSpenderCommitteeOrgTypeEnumW       GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum = "W"
)

type GetSchedulesScheduleBSpenderCommitteeTypeEnum string

const (
	GetSchedulesScheduleBSpenderCommitteeTypeEnumUnknown GetSchedulesScheduleBSpenderCommitteeTypeEnum = ""
	GetSchedulesScheduleBSpenderCommitteeTypeEnumC       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "C"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumD       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "D"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumE       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "E"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumH       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "H"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumI       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "I"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumN       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "N"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumO       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "O"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumP       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "P"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumQ       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "Q"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumS       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "S"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumU       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "U"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumV       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "V"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumW       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "W"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumX       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "X"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumY       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "Y"
	GetSchedulesScheduleBSpenderCommitteeTypeEnumZ       GetSchedulesScheduleBSpenderCommitteeTypeEnum = "Z"
)

type GetSchedulesScheduleBQueryParams struct {
	APIKey                      string                                                 `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeID                 []string                                               `queryParam:"style=form,explode=true,name=committee_id"`
	DisbursementDescription     []string                                               `queryParam:"style=form,explode=true,name=disbursement_description"`
	DisbursementPurposeCategory []string                                               `queryParam:"style=form,explode=true,name=disbursement_purpose_category"`
	ImageNumber                 []string                                               `queryParam:"style=form,explode=true,name=image_number"`
	LastDisbursementAmount      *float32                                               `queryParam:"style=form,explode=true,name=last_disbursement_amount"`
	LastDisbursementDate        *time.Time                                             `queryParam:"style=form,explode=true,name=last_disbursement_date"`
	LastIndex                   *int32                                                 `queryParam:"style=form,explode=true,name=last_index"`
	LineNumber                  *string                                                `queryParam:"style=form,explode=true,name=line_number"`
	MaxAmount                   *string                                                `queryParam:"style=form,explode=true,name=max_amount"`
	MaxDate                     *time.Time                                             `queryParam:"style=form,explode=true,name=max_date"`
	MaxImageNumber              *string                                                `queryParam:"style=form,explode=true,name=max_image_number"`
	MinAmount                   *string                                                `queryParam:"style=form,explode=true,name=min_amount"`
	MinDate                     *time.Time                                             `queryParam:"style=form,explode=true,name=min_date"`
	MinImageNumber              *string                                                `queryParam:"style=form,explode=true,name=min_image_number"`
	PerPage                     *int32                                                 `queryParam:"style=form,explode=true,name=per_page"`
	RecipientCity               []string                                               `queryParam:"style=form,explode=true,name=recipient_city"`
	RecipientCommitteeID        []string                                               `queryParam:"style=form,explode=true,name=recipient_committee_id"`
	RecipientName               []string                                               `queryParam:"style=form,explode=true,name=recipient_name"`
	RecipientState              []string                                               `queryParam:"style=form,explode=true,name=recipient_state"`
	Sort                        *string                                                `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull                *bool                                                  `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly                *bool                                                  `queryParam:"style=form,explode=true,name=sort_null_only"`
	SpenderCommitteeDesignation []GetSchedulesScheduleBSpenderCommitteeDesignationEnum `queryParam:"style=form,explode=true,name=spender_committee_designation"`
	SpenderCommitteeOrgType     []GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum     `queryParam:"style=form,explode=true,name=spender_committee_org_type"`
	SpenderCommitteeType        []GetSchedulesScheduleBSpenderCommitteeTypeEnum        `queryParam:"style=form,explode=true,name=spender_committee_type"`
	TwoYearTransactionPeriod    []int32                                                `queryParam:"style=form,explode=true,name=two_year_transaction_period"`
}

type GetSchedulesScheduleBRequest struct {
	QueryParams GetSchedulesScheduleBQueryParams
}

type GetSchedulesScheduleBResponse struct {
	ContentType   string
	ScheduleBPage *shared.ScheduleBPage
	StatusCode    int64
}
