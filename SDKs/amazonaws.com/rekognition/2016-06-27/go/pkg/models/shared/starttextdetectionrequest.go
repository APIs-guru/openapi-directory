package shared

type StartTextDetectionRequest struct {
	ClientRequestToken  *string                    `json:"ClientRequestToken"`
	Filters             *StartTextDetectionFilters `json:"Filters"`
	JobTag              *string                    `json:"JobTag"`
	NotificationChannel *NotificationChannel       `json:"NotificationChannel"`
	Video               Video                      `json:"Video"`
}
