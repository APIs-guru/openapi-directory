package shared

import (
"time")

type ReportDate struct {
    CreateDate *time.Time `json:"create_date,omitempty"`
    DueDate *time.Time `json:"due_date,omitempty"`
    ReportType *string `json:"report_type,omitempty"`
    ReportTypeFull *string `json:"report_type_full,omitempty"`
    ReportYear *int32 `json:"report_year,omitempty"`
    UpdateDate *time.Time `json:"update_date,omitempty"`
    
}

