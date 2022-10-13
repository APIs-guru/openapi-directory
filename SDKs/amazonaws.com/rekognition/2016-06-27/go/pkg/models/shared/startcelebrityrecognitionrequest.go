package shared

type StartCelebrityRecognitionRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	JobTag              *string              `json:"JobTag"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	Video               Video                `json:"Video"`
}
