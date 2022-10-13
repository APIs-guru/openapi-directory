package shared

type SubmissionStateEnum string

const (
	SubmissionStateEnumPending                SubmissionStateEnum = "pending"
	SubmissionStateEnumProcessed              SubmissionStateEnum = "processed"
	SubmissionStateEnumInvalidData            SubmissionStateEnum = "invalid_data"
	SubmissionStateEnumError                  SubmissionStateEnum = "error"
	SubmissionStateEnumImageDownloadFailed    SubmissionStateEnum = "image_download_failed"
	SubmissionStateEnumImageProcessingFailed  SubmissionStateEnum = "image_processing_failed"
	SubmissionStateEnumWaitingForDataRequests SubmissionStateEnum = "waiting_for_data_requests"
	SubmissionStateEnumSyntaxError            SubmissionStateEnum = "syntax_error"
	SubmissionStateEnumAccountSuspended       SubmissionStateEnum = "account_suspended"
	SubmissionStateEnumLicenseRevoked         SubmissionStateEnum = "license_revoked"
	SubmissionStateEnumAccidental             SubmissionStateEnum = "accidental"
)

type Submission struct {
	Actions              []SubmissionAction      `json:"actions"`
	BatchID              *string                 `json:"batch_id"`
	Data                 map[string]interface{}  `json:"data"`
	DataRequests         []SubmissionDataRequest `json:"data_requests"`
	DownloadURL          *string                 `json:"download_url"`
	Editable             *bool                   `json:"editable"`
	Expired              bool                    `json:"expired"`
	ExpiresAt            *string                 `json:"expires_at"`
	ID                   string                  `json:"id"`
	Metadata             map[string]interface{}  `json:"metadata"`
	PdfHash              *string                 `json:"pdf_hash"`
	PermanentDownloadURL *string                 `json:"permanent_download_url"`
	ProcessedAt          *string                 `json:"processed_at"`
	Referrer             *string                 `json:"referrer"`
	Source               *string                 `json:"source"`
	State                SubmissionStateEnum     `json:"state"`
	TemplateID           *string                 `json:"template_id"`
	Test                 bool                    `json:"test"`
	TruncatedText        map[string]interface{}  `json:"truncated_text"`
}
