package shared

// FaceSearchSettings
// Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
type FaceSearchSettings struct {
	CollectionID       *string  `json:"CollectionId,omitempty"`
	FaceMatchThreshold *float32 `json:"FaceMatchThreshold,omitempty"`
}
