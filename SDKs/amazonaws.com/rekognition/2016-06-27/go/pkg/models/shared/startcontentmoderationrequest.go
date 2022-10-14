package shared

type StartContentModerationRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken,omitempty"`
	JobTag              *string              `json:"JobTag,omitempty"`
	MinConfidence       *float32             `json:"MinConfidence,omitempty"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
	Video               Video                `json:"Video"`
}
