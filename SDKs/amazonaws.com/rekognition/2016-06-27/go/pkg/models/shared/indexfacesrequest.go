package shared

type IndexFacesRequest struct {
	CollectionID        string             `json:"CollectionId"`
	DetectionAttributes []AttributeEnum    `json:"DetectionAttributes"`
	ExternalImageID     *string            `json:"ExternalImageId"`
	Image               Image              `json:"Image"`
	MaxFaces            *int64             `json:"MaxFaces"`
	QualityFilter       *QualityFilterEnum `json:"QualityFilter"`
}
