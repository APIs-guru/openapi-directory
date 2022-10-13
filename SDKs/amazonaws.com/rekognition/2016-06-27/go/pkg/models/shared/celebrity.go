package shared

type Celebrity struct {
	Face            *ComparedFace `json:"Face"`
	ID              *string       `json:"Id"`
	KnownGender     *KnownGender  `json:"KnownGender"`
	MatchConfidence *float32      `json:"MatchConfidence"`
	Name            *string       `json:"Name"`
	Urls            []string      `json:"Urls"`
}
