package shared

import (
	"time"
)

type ReportDate struct {
	CreateDate     *time.Time `json:"create_date"`
	DueDate        *time.Time `json:"due_date"`
	ReportType     *string    `json:"report_type"`
	ReportTypeFull *string    `json:"report_type_full"`
	ReportYear     *int32     `json:"report_year"`
	UpdateDate     *time.Time `json:"update_date"`
}
