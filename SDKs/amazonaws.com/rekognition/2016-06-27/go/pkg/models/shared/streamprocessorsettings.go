package shared

// StreamProcessorSettings
// Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
type StreamProcessorSettings struct {
	FaceSearch *FaceSearchSettings `json:"FaceSearch,omitempty"`
}
