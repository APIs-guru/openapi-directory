package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetFilingsAmendmentIndicatorEnum string

const (
	GetFilingsAmendmentIndicatorEnumUnknown GetFilingsAmendmentIndicatorEnum = ""
	GetFilingsAmendmentIndicatorEnumN       GetFilingsAmendmentIndicatorEnum = "N"
	GetFilingsAmendmentIndicatorEnumA       GetFilingsAmendmentIndicatorEnum = "A"
	GetFilingsAmendmentIndicatorEnumT       GetFilingsAmendmentIndicatorEnum = "T"
	GetFilingsAmendmentIndicatorEnumC       GetFilingsAmendmentIndicatorEnum = "C"
	GetFilingsAmendmentIndicatorEnumM       GetFilingsAmendmentIndicatorEnum = "M"
	GetFilingsAmendmentIndicatorEnumS       GetFilingsAmendmentIndicatorEnum = "S"
)

type GetFilingsFilerTypeEnum string

const (
	GetFilingsFilerTypeEnumEFile GetFilingsFilerTypeEnum = "e-file"
	GetFilingsFilerTypeEnumPaper GetFilingsFilerTypeEnum = "paper"
)

type GetFilingsOfficeEnum string

const (
	GetFilingsOfficeEnumUnknown GetFilingsOfficeEnum = ""
	GetFilingsOfficeEnumH       GetFilingsOfficeEnum = "H"
	GetFilingsOfficeEnumS       GetFilingsOfficeEnum = "S"
	GetFilingsOfficeEnumP       GetFilingsOfficeEnum = "P"
)

type GetFilingsQueryParams struct {
	AmendmentIndicator      []GetFilingsAmendmentIndicatorEnum `queryParam:"style=form,explode=true,name=amendment_indicator"`
	APIKey                  string                             `queryParam:"style=form,explode=true,name=api_key"`
	BeginningImageNumber    []string                           `queryParam:"style=form,explode=true,name=beginning_image_number"`
	CandidateID             []string                           `queryParam:"style=form,explode=true,name=candidate_id"`
	CommitteeID             []string                           `queryParam:"style=form,explode=true,name=committee_id"`
	CommitteeType           *string                            `queryParam:"style=form,explode=true,name=committee_type"`
	Cycle                   []int32                            `queryParam:"style=form,explode=true,name=cycle"`
	District                []string                           `queryParam:"style=form,explode=true,name=district"`
	DocumentType            []string                           `queryParam:"style=form,explode=true,name=document_type"`
	FileNumber              []int32                            `queryParam:"style=form,explode=true,name=file_number"`
	FilerType               *GetFilingsFilerTypeEnum           `queryParam:"style=form,explode=true,name=filer_type"`
	FormCategory            []string                           `queryParam:"style=form,explode=true,name=form_category"`
	FormType                []string                           `queryParam:"style=form,explode=true,name=form_type"`
	IsAmended               *bool                              `queryParam:"style=form,explode=true,name=is_amended"`
	MaxReceiptDate          *time.Time                         `queryParam:"style=form,explode=true,name=max_receipt_date"`
	MinReceiptDate          *time.Time                         `queryParam:"style=form,explode=true,name=min_receipt_date"`
	MostRecent              *bool                              `queryParam:"style=form,explode=true,name=most_recent"`
	Office                  []GetFilingsOfficeEnum             `queryParam:"style=form,explode=true,name=office"`
	Page                    *int32                             `queryParam:"style=form,explode=true,name=page"`
	Party                   []string                           `queryParam:"style=form,explode=true,name=party"`
	PerPage                 *int32                             `queryParam:"style=form,explode=true,name=per_page"`
	PrimaryGeneralIndicator []string                           `queryParam:"style=form,explode=true,name=primary_general_indicator"`
	ReportType              []string                           `queryParam:"style=form,explode=true,name=report_type"`
	ReportYear              []int32                            `queryParam:"style=form,explode=true,name=report_year"`
	RequestType             []string                           `queryParam:"style=form,explode=true,name=request_type"`
	Sort                    []string                           `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull            *bool                              `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly            *bool                              `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast           *bool                              `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State                   []string                           `queryParam:"style=form,explode=true,name=state"`
}

type GetFilingsRequest struct {
	QueryParams GetFilingsQueryParams
}

type GetFilingsResponse struct {
	ContentType string
	FilingsPage *shared.FilingsPage
	StatusCode  int64
}
