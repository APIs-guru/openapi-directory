package shared

// PersonDetail
// Details about a person detected in a video analysis request.
type PersonDetail struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Face        *FaceDetail  `json:"Face,omitempty"`
	Index       *int64       `json:"Index,omitempty"`
}
