package shared

type StartDocumentAnalysisRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	DocumentLocation    DocumentLocation     `json:"DocumentLocation"`
	FeatureTypes        []FeatureTypeEnum    `json:"FeatureTypes"`
	JobTag              *string              `json:"JobTag"`
	KmsKeyID            *string              `json:"KMSKeyId"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	OutputConfig        *OutputConfig        `json:"OutputConfig"`
}
