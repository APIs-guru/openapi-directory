package shared




type SubmissionStateEnum string

const (
    SubmissionStateEnumPending SubmissionStateEnum = "pending"
SubmissionStateEnumProcessed SubmissionStateEnum = "processed"
SubmissionStateEnumInvalidData SubmissionStateEnum = "invalid_data"
SubmissionStateEnumError SubmissionStateEnum = "error"
SubmissionStateEnumImageDownloadFailed SubmissionStateEnum = "image_download_failed"
SubmissionStateEnumImageProcessingFailed SubmissionStateEnum = "image_processing_failed"
SubmissionStateEnumWaitingForDataRequests SubmissionStateEnum = "waiting_for_data_requests"
SubmissionStateEnumSyntaxError SubmissionStateEnum = "syntax_error"
SubmissionStateEnumAccountSuspended SubmissionStateEnum = "account_suspended"
SubmissionStateEnumLicenseRevoked SubmissionStateEnum = "license_revoked"
SubmissionStateEnumAccidental SubmissionStateEnum = "accidental"
)


type Submission struct {
    Actions []SubmissionAction `json:"actions,omitempty"`
    BatchID *string `json:"batch_id,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    DataRequests []SubmissionDataRequest `json:"data_requests,omitempty"`
    DownloadURL *string `json:"download_url,omitempty"`
    Editable *bool `json:"editable,omitempty"`
    Expired bool `json:"expired"`
    ExpiresAt *string `json:"expires_at,omitempty"`
    ID string `json:"id"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    PdfHash *string `json:"pdf_hash,omitempty"`
    PermanentDownloadURL *string `json:"permanent_download_url,omitempty"`
    ProcessedAt *string `json:"processed_at,omitempty"`
    Referrer *string `json:"referrer,omitempty"`
    Source *string `json:"source,omitempty"`
    State SubmissionStateEnum `json:"state"`
    TemplateID *string `json:"template_id,omitempty"`
    Test bool `json:"test"`
    TruncatedText map[string]interface{} `json:"truncated_text,omitempty"`
    
}

