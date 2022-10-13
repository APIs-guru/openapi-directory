package shared

type Activity struct {
	CombinedEvent *Event  `json:"combinedEvent"`
	SingleEvents  []Event `json:"singleEvents"`
}
