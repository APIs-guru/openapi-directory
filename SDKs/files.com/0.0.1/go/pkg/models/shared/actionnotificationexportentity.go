package shared

import (
	"time"
)

type ActionNotificationExportEntity struct {
	EndAt              *time.Time `json:"end_at"`
	ExportVersion      *string    `json:"export_version"`
	ID                 *int32     `json:"id"`
	QueryFolder        *string    `json:"query_folder"`
	QueryMessage       *string    `json:"query_message"`
	QueryPath          *string    `json:"query_path"`
	QueryRequestMethod *string    `json:"query_request_method"`
	QueryRequestURL    *string    `json:"query_request_url"`
	QueryStatus        *string    `json:"query_status"`
	QuerySuccess       *bool      `json:"query_success"`
	ResultsURL         *string    `json:"results_url"`
	StartAt            *time.Time `json:"start_at"`
	Status             *string    `json:"status"`
}
