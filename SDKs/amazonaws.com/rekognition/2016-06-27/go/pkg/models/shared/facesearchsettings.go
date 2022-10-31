package shared

type FaceSearchSettings struct {
	CollectionID       *string  `json:"CollectionId,omitempty"`
	FaceMatchThreshold *float32 `json:"FaceMatchThreshold,omitempty"`
}
