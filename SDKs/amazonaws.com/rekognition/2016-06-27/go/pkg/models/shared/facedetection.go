package shared

// FaceDetection
// Information about a face detected in a video analysis request and the time the face was detected in the video.
type FaceDetection struct {
	Face      *FaceDetail `json:"Face,omitempty"`
	Timestamp *int64      `json:"Timestamp,omitempty"`
}
