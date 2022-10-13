package shared

type StartPersonTrackingRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	JobTag              *string              `json:"JobTag"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	Video               Video                `json:"Video"`
}
