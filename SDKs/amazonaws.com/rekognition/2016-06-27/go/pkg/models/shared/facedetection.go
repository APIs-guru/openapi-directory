package shared



type FaceDetection struct {
    Face *FaceDetail `json:"Face,omitempty"`
    Timestamp *int64 `json:"Timestamp,omitempty"`
    
}

