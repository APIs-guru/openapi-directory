package shared

import (
	"time"
)

type CommunicationCost struct {
	ActionCode                         *string    `json:"action_code,omitempty"`
	ActionCodeFull                     *string    `json:"action_code_full,omitempty"`
	CandidateFirstName                 *string    `json:"candidate_first_name,omitempty"`
	CandidateID                        *string    `json:"candidate_id,omitempty"`
	CandidateLastName                  *string    `json:"candidate_last_name,omitempty"`
	CandidateMiddleName                *string    `json:"candidate_middle_name,omitempty"`
	CandidateName                      *string    `json:"candidate_name,omitempty"`
	CandidateOffice                    *string    `json:"candidate_office,omitempty"`
	CandidateOfficeDistrict            *string    `json:"candidate_office_district,omitempty"`
	CandidateOfficeFull                *string    `json:"candidate_office_full,omitempty"`
	CandidateOfficeState               *string    `json:"candidate_office_state,omitempty"`
	CommitteeID                        *string    `json:"committee_id,omitempty"`
	CommitteeName                      *string    `json:"committee_name,omitempty"`
	CommunicationClass                 *string    `json:"communication_class,omitempty"`
	CommunicationType                  *string    `json:"communication_type,omitempty"`
	CommunicationTypeFull              *string    `json:"communication_type_full,omitempty"`
	Cycle                              *int32     `json:"cycle,omitempty"`
	FileNumber                         *int32     `json:"file_number,omitempty"`
	FormTypeCode                       *string    `json:"form_type_code,omitempty"`
	ImageNumber                        *string    `json:"image_number,omitempty"`
	OriginalSubID                      *int32     `json:"original_sub_id,omitempty"`
	PdfURL                             *string    `json:"pdf_url,omitempty"`
	PrimaryGeneralIndicator            *string    `json:"primary_general_indicator,omitempty"`
	PrimaryGeneralIndicatorDescription *string    `json:"primary_general_indicator_description,omitempty"`
	Purpose                            *string    `json:"purpose,omitempty"`
	ReportType                         *string    `json:"report_type,omitempty"`
	ReportYear                         *int32     `json:"report_year,omitempty"`
	ScheduleType                       *string    `json:"schedule_type,omitempty"`
	ScheduleTypeFull                   *string    `json:"schedule_type_full,omitempty"`
	StateFull                          *string    `json:"state_full,omitempty"`
	SubID                              *int32     `json:"sub_id,omitempty"`
	SupportOpposeIndicator             *string    `json:"support_oppose_indicator,omitempty"`
	TranID                             *string    `json:"tran_id,omitempty"`
	TransactionAmount                  *float64   `json:"transaction_amount,omitempty"`
	TransactionDate                    *time.Time `json:"transaction_date,omitempty"`
	TransactionType                    *string    `json:"transaction_type,omitempty"`
}
