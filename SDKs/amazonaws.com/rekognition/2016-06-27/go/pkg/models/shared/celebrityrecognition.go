package shared

// CelebrityRecognition
// Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
type CelebrityRecognition struct {
	Celebrity *CelebrityDetail `json:"Celebrity,omitempty"`
	Timestamp *int64           `json:"Timestamp,omitempty"`
}
