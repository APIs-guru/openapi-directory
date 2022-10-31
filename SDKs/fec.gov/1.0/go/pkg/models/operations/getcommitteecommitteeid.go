package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitteeCommitteeIDPathParams struct {
	CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
}

type GetCommitteeCommitteeIDCommitteeTypeEnum string

const (
	GetCommitteeCommitteeIDCommitteeTypeEnumUnknown GetCommitteeCommitteeIDCommitteeTypeEnum = ""
	GetCommitteeCommitteeIDCommitteeTypeEnumC       GetCommitteeCommitteeIDCommitteeTypeEnum = "C"
	GetCommitteeCommitteeIDCommitteeTypeEnumD       GetCommitteeCommitteeIDCommitteeTypeEnum = "D"
	GetCommitteeCommitteeIDCommitteeTypeEnumE       GetCommitteeCommitteeIDCommitteeTypeEnum = "E"
	GetCommitteeCommitteeIDCommitteeTypeEnumH       GetCommitteeCommitteeIDCommitteeTypeEnum = "H"
	GetCommitteeCommitteeIDCommitteeTypeEnumI       GetCommitteeCommitteeIDCommitteeTypeEnum = "I"
	GetCommitteeCommitteeIDCommitteeTypeEnumN       GetCommitteeCommitteeIDCommitteeTypeEnum = "N"
	GetCommitteeCommitteeIDCommitteeTypeEnumO       GetCommitteeCommitteeIDCommitteeTypeEnum = "O"
	GetCommitteeCommitteeIDCommitteeTypeEnumP       GetCommitteeCommitteeIDCommitteeTypeEnum = "P"
	GetCommitteeCommitteeIDCommitteeTypeEnumQ       GetCommitteeCommitteeIDCommitteeTypeEnum = "Q"
	GetCommitteeCommitteeIDCommitteeTypeEnumS       GetCommitteeCommitteeIDCommitteeTypeEnum = "S"
	GetCommitteeCommitteeIDCommitteeTypeEnumU       GetCommitteeCommitteeIDCommitteeTypeEnum = "U"
	GetCommitteeCommitteeIDCommitteeTypeEnumV       GetCommitteeCommitteeIDCommitteeTypeEnum = "V"
	GetCommitteeCommitteeIDCommitteeTypeEnumW       GetCommitteeCommitteeIDCommitteeTypeEnum = "W"
	GetCommitteeCommitteeIDCommitteeTypeEnumX       GetCommitteeCommitteeIDCommitteeTypeEnum = "X"
	GetCommitteeCommitteeIDCommitteeTypeEnumY       GetCommitteeCommitteeIDCommitteeTypeEnum = "Y"
	GetCommitteeCommitteeIDCommitteeTypeEnumZ       GetCommitteeCommitteeIDCommitteeTypeEnum = "Z"
)

type GetCommitteeCommitteeIDDesignationEnum string

const (
	GetCommitteeCommitteeIDDesignationEnumUnknown GetCommitteeCommitteeIDDesignationEnum = ""
	GetCommitteeCommitteeIDDesignationEnumA       GetCommitteeCommitteeIDDesignationEnum = "A"
	GetCommitteeCommitteeIDDesignationEnumJ       GetCommitteeCommitteeIDDesignationEnum = "J"
	GetCommitteeCommitteeIDDesignationEnumP       GetCommitteeCommitteeIDDesignationEnum = "P"
	GetCommitteeCommitteeIDDesignationEnumU       GetCommitteeCommitteeIDDesignationEnum = "U"
	GetCommitteeCommitteeIDDesignationEnumB       GetCommitteeCommitteeIDDesignationEnum = "B"
	GetCommitteeCommitteeIDDesignationEnumD       GetCommitteeCommitteeIDDesignationEnum = "D"
)

type GetCommitteeCommitteeIDFilingFrequencyEnum string

const (
	GetCommitteeCommitteeIDFilingFrequencyEnumUnknown GetCommitteeCommitteeIDFilingFrequencyEnum = ""
	GetCommitteeCommitteeIDFilingFrequencyEnumA       GetCommitteeCommitteeIDFilingFrequencyEnum = "A"
	GetCommitteeCommitteeIDFilingFrequencyEnumM       GetCommitteeCommitteeIDFilingFrequencyEnum = "M"
	GetCommitteeCommitteeIDFilingFrequencyEnumN       GetCommitteeCommitteeIDFilingFrequencyEnum = "N"
	GetCommitteeCommitteeIDFilingFrequencyEnumQ       GetCommitteeCommitteeIDFilingFrequencyEnum = "Q"
	GetCommitteeCommitteeIDFilingFrequencyEnumT       GetCommitteeCommitteeIDFilingFrequencyEnum = "T"
	GetCommitteeCommitteeIDFilingFrequencyEnumW       GetCommitteeCommitteeIDFilingFrequencyEnum = "W"
	GetCommitteeCommitteeIDFilingFrequencyEnumMinusA  GetCommitteeCommitteeIDFilingFrequencyEnum = "-A"
	GetCommitteeCommitteeIDFilingFrequencyEnumMinusT  GetCommitteeCommitteeIDFilingFrequencyEnum = "-T"
)

type GetCommitteeCommitteeIDOrganizationTypeEnum string

const (
	GetCommitteeCommitteeIDOrganizationTypeEnumUnknown GetCommitteeCommitteeIDOrganizationTypeEnum = ""
	GetCommitteeCommitteeIDOrganizationTypeEnumC       GetCommitteeCommitteeIDOrganizationTypeEnum = "C"
	GetCommitteeCommitteeIDOrganizationTypeEnumL       GetCommitteeCommitteeIDOrganizationTypeEnum = "L"
	GetCommitteeCommitteeIDOrganizationTypeEnumM       GetCommitteeCommitteeIDOrganizationTypeEnum = "M"
	GetCommitteeCommitteeIDOrganizationTypeEnumT       GetCommitteeCommitteeIDOrganizationTypeEnum = "T"
	GetCommitteeCommitteeIDOrganizationTypeEnumV       GetCommitteeCommitteeIDOrganizationTypeEnum = "V"
	GetCommitteeCommitteeIDOrganizationTypeEnumW       GetCommitteeCommitteeIDOrganizationTypeEnum = "W"
)

type GetCommitteeCommitteeIDQueryParams struct {
	APIKey           string                                        `queryParam:"style=form,explode=true,name=api_key"`
	CommitteeType    []GetCommitteeCommitteeIDCommitteeTypeEnum    `queryParam:"style=form,explode=true,name=committee_type"`
	Cycle            []int32                                       `queryParam:"style=form,explode=true,name=cycle"`
	Designation      []GetCommitteeCommitteeIDDesignationEnum      `queryParam:"style=form,explode=true,name=designation"`
	FilingFrequency  []GetCommitteeCommitteeIDFilingFrequencyEnum  `queryParam:"style=form,explode=true,name=filing_frequency"`
	OrganizationType []GetCommitteeCommitteeIDOrganizationTypeEnum `queryParam:"style=form,explode=true,name=organization_type"`
	Page             *int32                                        `queryParam:"style=form,explode=true,name=page"`
	PerPage          *int32                                        `queryParam:"style=form,explode=true,name=per_page"`
	Sort             *string                                       `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull     *bool                                         `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly     *bool                                         `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast    *bool                                         `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	Year             []int32                                       `queryParam:"style=form,explode=true,name=year"`
}

type GetCommitteeCommitteeIDRequest struct {
	PathParams  GetCommitteeCommitteeIDPathParams
	QueryParams GetCommitteeCommitteeIDQueryParams
}

type GetCommitteeCommitteeIDResponse struct {
	CommitteeDetailPage *shared.CommitteeDetailPage
	ContentType         string
	StatusCode          int64
}
