package shared

import (
	"time"
)

type CommunicationCost struct {
	ActionCode                         *string    `json:"action_code"`
	ActionCodeFull                     *string    `json:"action_code_full"`
	CandidateFirstName                 *string    `json:"candidate_first_name"`
	CandidateID                        *string    `json:"candidate_id"`
	CandidateLastName                  *string    `json:"candidate_last_name"`
	CandidateMiddleName                *string    `json:"candidate_middle_name"`
	CandidateName                      *string    `json:"candidate_name"`
	CandidateOffice                    *string    `json:"candidate_office"`
	CandidateOfficeDistrict            *string    `json:"candidate_office_district"`
	CandidateOfficeFull                *string    `json:"candidate_office_full"`
	CandidateOfficeState               *string    `json:"candidate_office_state"`
	CommitteeID                        *string    `json:"committee_id"`
	CommitteeName                      *string    `json:"committee_name"`
	CommunicationClass                 *string    `json:"communication_class"`
	CommunicationType                  *string    `json:"communication_type"`
	CommunicationTypeFull              *string    `json:"communication_type_full"`
	Cycle                              *int32     `json:"cycle"`
	FileNumber                         *int32     `json:"file_number"`
	FormTypeCode                       *string    `json:"form_type_code"`
	ImageNumber                        *string    `json:"image_number"`
	OriginalSubID                      *int32     `json:"original_sub_id"`
	PdfURL                             *string    `json:"pdf_url"`
	PrimaryGeneralIndicator            *string    `json:"primary_general_indicator"`
	PrimaryGeneralIndicatorDescription *string    `json:"primary_general_indicator_description"`
	Purpose                            *string    `json:"purpose"`
	ReportType                         *string    `json:"report_type"`
	ReportYear                         *int32     `json:"report_year"`
	ScheduleType                       *string    `json:"schedule_type"`
	ScheduleTypeFull                   *string    `json:"schedule_type_full"`
	StateFull                          *string    `json:"state_full"`
	SubID                              *int32     `json:"sub_id"`
	SupportOpposeIndicator             *string    `json:"support_oppose_indicator"`
	TranID                             *string    `json:"tran_id"`
	TransactionAmount                  *float64   `json:"transaction_amount"`
	TransactionDate                    *time.Time `json:"transaction_date"`
	TransactionType                    *string    `json:"transaction_type"`
}
