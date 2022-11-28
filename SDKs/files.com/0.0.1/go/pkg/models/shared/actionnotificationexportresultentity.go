package shared

// ActionNotificationExportResultEntity
// List Action Notification Export Results
type ActionNotificationExportResultEntity struct {
	CreatedAt      *int32  `json:"created_at,omitempty"`
	Folder         *string `json:"folder,omitempty"`
	ID             *int32  `json:"id,omitempty"`
	Message        *string `json:"message,omitempty"`
	Path           *string `json:"path,omitempty"`
	RequestHeaders *string `json:"request_headers,omitempty"`
	RequestMethod  *string `json:"request_method,omitempty"`
	RequestURL     *string `json:"request_url,omitempty"`
	Status         *int32  `json:"status,omitempty"`
	Success        *bool   `json:"success,omitempty"`
}
