package shared

type StartSegmentDetectionRequest struct {
	ClientRequestToken  *string                       `json:"ClientRequestToken"`
	Filters             *StartSegmentDetectionFilters `json:"Filters"`
	JobTag              *string                       `json:"JobTag"`
	NotificationChannel *NotificationChannel          `json:"NotificationChannel"`
	SegmentTypes        []SegmentTypeEnum             `json:"SegmentTypes"`
	Video               Video                         `json:"Video"`
}
