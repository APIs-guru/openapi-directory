package shared

type ContentModerationDetection struct {
	ModerationLabel *ModerationLabel `json:"ModerationLabel"`
	Timestamp       *int64           `json:"Timestamp"`
}
