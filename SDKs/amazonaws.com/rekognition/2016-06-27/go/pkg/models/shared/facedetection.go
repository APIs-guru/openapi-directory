package shared

type FaceDetection struct {
	Face      *FaceDetail `json:"Face"`
	Timestamp *int64      `json:"Timestamp"`
}
