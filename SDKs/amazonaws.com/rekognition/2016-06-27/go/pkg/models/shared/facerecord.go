package shared

// FaceRecord
// Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
type FaceRecord struct {
	Face       *Face       `json:"Face,omitempty"`
	FaceDetail *FaceDetail `json:"FaceDetail,omitempty"`
}
