package shared

type StartDocumentTextDetectionRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	DocumentLocation    DocumentLocation     `json:"DocumentLocation"`
	JobTag              *string              `json:"JobTag"`
	KmsKeyID            *string              `json:"KMSKeyId"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	OutputConfig        *OutputConfig        `json:"OutputConfig"`
}
