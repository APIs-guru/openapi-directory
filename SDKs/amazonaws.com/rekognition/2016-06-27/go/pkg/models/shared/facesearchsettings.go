package shared

type FaceSearchSettings struct {
	CollectionID       *string  `json:"CollectionId"`
	FaceMatchThreshold *float32 `json:"FaceMatchThreshold"`
}
