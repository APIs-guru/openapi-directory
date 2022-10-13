package shared

type Face struct {
	BoundingBox     *BoundingBox `json:"BoundingBox"`
	Confidence      *float32     `json:"Confidence"`
	ExternalImageID *string      `json:"ExternalImageId"`
	FaceID          *string      `json:"FaceId"`
	ImageID         *string      `json:"ImageId"`
}
