package shared

// Face
// Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.
type Face struct {
	BoundingBox     *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence      *float32     `json:"Confidence,omitempty"`
	ExternalImageID *string      `json:"ExternalImageId,omitempty"`
	FaceID          *string      `json:"FaceId,omitempty"`
	ImageID         *string      `json:"ImageId,omitempty"`
}
