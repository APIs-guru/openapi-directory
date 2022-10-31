package shared

import (
"time")

type ActionNotificationExportEntity struct {
    EndAt *time.Time `json:"end_at,omitempty"`
    ExportVersion *string `json:"export_version,omitempty"`
    ID *int32 `json:"id,omitempty"`
    QueryFolder *string `json:"query_folder,omitempty"`
    QueryMessage *string `json:"query_message,omitempty"`
    QueryPath *string `json:"query_path,omitempty"`
    QueryRequestMethod *string `json:"query_request_method,omitempty"`
    QueryRequestURL *string `json:"query_request_url,omitempty"`
    QueryStatus *string `json:"query_status,omitempty"`
    QuerySuccess *bool `json:"query_success,omitempty"`
    ResultsURL *string `json:"results_url,omitempty"`
    StartAt *time.Time `json:"start_at,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

