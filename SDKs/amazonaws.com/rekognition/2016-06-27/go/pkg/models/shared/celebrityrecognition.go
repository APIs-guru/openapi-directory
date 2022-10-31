package shared

type CelebrityRecognition struct {
	Celebrity *CelebrityDetail `json:"Celebrity,omitempty"`
	Timestamp *int64           `json:"Timestamp,omitempty"`
}
