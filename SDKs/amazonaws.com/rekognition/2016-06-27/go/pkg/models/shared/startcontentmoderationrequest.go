package shared

type StartContentModerationRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	JobTag              *string              `json:"JobTag"`
	MinConfidence       *float32             `json:"MinConfidence"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	Video               Video                `json:"Video"`
}
