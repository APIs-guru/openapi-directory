package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCandidateCandidateIDFilingsPathParams struct {
	CandidateID string `pathParam:"style=simple,explode=false,name=candidate_id"`
}

type GetCandidateCandidateIDFilingsAmendmentIndicatorEnum string

const (
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumUnknown GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = ""
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumN       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "N"
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumA       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "A"
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumT       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "T"
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumC       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "C"
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumM       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "M"
	GetCandidateCandidateIDFilingsAmendmentIndicatorEnumS       GetCandidateCandidateIDFilingsAmendmentIndicatorEnum = "S"
)

type GetCandidateCandidateIDFilingsFilerTypeEnum string

const (
	GetCandidateCandidateIDFilingsFilerTypeEnumEFile GetCandidateCandidateIDFilingsFilerTypeEnum = "e-file"
	GetCandidateCandidateIDFilingsFilerTypeEnumPaper GetCandidateCandidateIDFilingsFilerTypeEnum = "paper"
)

type GetCandidateCandidateIDFilingsOfficeEnum string

const (
	GetCandidateCandidateIDFilingsOfficeEnumUnknown GetCandidateCandidateIDFilingsOfficeEnum = ""
	GetCandidateCandidateIDFilingsOfficeEnumH       GetCandidateCandidateIDFilingsOfficeEnum = "H"
	GetCandidateCandidateIDFilingsOfficeEnumS       GetCandidateCandidateIDFilingsOfficeEnum = "S"
	GetCandidateCandidateIDFilingsOfficeEnumP       GetCandidateCandidateIDFilingsOfficeEnum = "P"
)

type GetCandidateCandidateIDFilingsQueryParams struct {
	AmendmentIndicator      []GetCandidateCandidateIDFilingsAmendmentIndicatorEnum `queryParam:"style=form,explode=true,name=amendment_indicator"`
	APIKey                  string                                                 `queryParam:"style=form,explode=true,name=api_key"`
	BeginningImageNumber    []string                                               `queryParam:"style=form,explode=true,name=beginning_image_number"`
	CommitteeType           *string                                                `queryParam:"style=form,explode=true,name=committee_type"`
	Cycle                   []int32                                                `queryParam:"style=form,explode=true,name=cycle"`
	District                []string                                               `queryParam:"style=form,explode=true,name=district"`
	DocumentType            []string                                               `queryParam:"style=form,explode=true,name=document_type"`
	FileNumber              []int32                                                `queryParam:"style=form,explode=true,name=file_number"`
	FilerType               *GetCandidateCandidateIDFilingsFilerTypeEnum           `queryParam:"style=form,explode=true,name=filer_type"`
	FormCategory            []string                                               `queryParam:"style=form,explode=true,name=form_category"`
	FormType                []string                                               `queryParam:"style=form,explode=true,name=form_type"`
	IsAmended               *bool                                                  `queryParam:"style=form,explode=true,name=is_amended"`
	MaxReceiptDate          *time.Time                                             `queryParam:"style=form,explode=true,name=max_receipt_date"`
	MinReceiptDate          *time.Time                                             `queryParam:"style=form,explode=true,name=min_receipt_date"`
	MostRecent              *bool                                                  `queryParam:"style=form,explode=true,name=most_recent"`
	Office                  []GetCandidateCandidateIDFilingsOfficeEnum             `queryParam:"style=form,explode=true,name=office"`
	Page                    *int32                                                 `queryParam:"style=form,explode=true,name=page"`
	Party                   []string                                               `queryParam:"style=form,explode=true,name=party"`
	PerPage                 *int32                                                 `queryParam:"style=form,explode=true,name=per_page"`
	PrimaryGeneralIndicator []string                                               `queryParam:"style=form,explode=true,name=primary_general_indicator"`
	ReportType              []string                                               `queryParam:"style=form,explode=true,name=report_type"`
	ReportYear              []int32                                                `queryParam:"style=form,explode=true,name=report_year"`
	RequestType             []string                                               `queryParam:"style=form,explode=true,name=request_type"`
	Sort                    []string                                               `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull            *bool                                                  `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly            *bool                                                  `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast           *bool                                                  `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State                   []string                                               `queryParam:"style=form,explode=true,name=state"`
}

type GetCandidateCandidateIDFilingsRequest struct {
	PathParams  GetCandidateCandidateIDFilingsPathParams
	QueryParams GetCandidateCandidateIDFilingsQueryParams
}

type GetCandidateCandidateIDFilingsResponse struct {
	ContentType string
	FilingsPage *shared.FilingsPage
	StatusCode  int64
}
