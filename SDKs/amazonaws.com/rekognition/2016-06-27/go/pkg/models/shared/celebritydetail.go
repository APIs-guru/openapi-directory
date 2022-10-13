package shared

type CelebrityDetail struct {
	BoundingBox *BoundingBox `json:"BoundingBox"`
	Confidence  *float32     `json:"Confidence"`
	Face        *FaceDetail  `json:"Face"`
	ID          *string      `json:"Id"`
	Name        *string      `json:"Name"`
	Urls        []string     `json:"Urls"`
}
