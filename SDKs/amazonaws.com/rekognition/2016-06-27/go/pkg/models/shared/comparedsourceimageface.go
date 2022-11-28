package shared

// ComparedSourceImageFace
// Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.
type ComparedSourceImageFace struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence  *float32     `json:"Confidence,omitempty"`
}
