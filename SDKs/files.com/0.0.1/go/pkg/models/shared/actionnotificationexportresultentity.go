package shared

type ActionNotificationExportResultEntity struct {
	CreatedAt      *int32  `json:"created_at"`
	Folder         *string `json:"folder"`
	ID             *int32  `json:"id"`
	Message        *string `json:"message"`
	Path           *string `json:"path"`
	RequestHeaders *string `json:"request_headers"`
	RequestMethod  *string `json:"request_method"`
	RequestURL     *string `json:"request_url"`
	Status         *int32  `json:"status"`
	Success        *bool   `json:"success"`
}
