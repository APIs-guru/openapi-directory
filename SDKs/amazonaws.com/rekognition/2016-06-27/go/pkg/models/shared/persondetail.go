package shared

type PersonDetail struct {
	BoundingBox *BoundingBox `json:"BoundingBox"`
	Face        *FaceDetail  `json:"Face"`
	Index       *int64       `json:"Index"`
}
