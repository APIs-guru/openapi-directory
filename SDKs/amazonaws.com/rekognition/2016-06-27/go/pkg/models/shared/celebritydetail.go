package shared

type CelebrityDetail struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence  *float32     `json:"Confidence,omitempty"`
	Face        *FaceDetail  `json:"Face,omitempty"`
	ID          *string      `json:"Id,omitempty"`
	Name        *string      `json:"Name,omitempty"`
	Urls        []string     `json:"Urls,omitempty"`
}
