package shared

// Celebrity
// Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
type Celebrity struct {
	Face            *ComparedFace `json:"Face,omitempty"`
	ID              *string       `json:"Id,omitempty"`
	KnownGender     *KnownGender  `json:"KnownGender,omitempty"`
	MatchConfidence *float32      `json:"MatchConfidence,omitempty"`
	Name            *string       `json:"Name,omitempty"`
	Urls            []string      `json:"Urls,omitempty"`
}
