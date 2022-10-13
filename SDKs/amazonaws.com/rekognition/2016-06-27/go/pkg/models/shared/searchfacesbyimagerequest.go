package shared

type SearchFacesByImageRequest struct {
	CollectionID       string             `json:"CollectionId"`
	FaceMatchThreshold *float32           `json:"FaceMatchThreshold"`
	Image              Image              `json:"Image"`
	MaxFaces           *int64             `json:"MaxFaces"`
	QualityFilter      *QualityFilterEnum `json:"QualityFilter"`
}
