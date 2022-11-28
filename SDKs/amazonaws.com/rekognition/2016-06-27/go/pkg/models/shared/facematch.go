package shared

// FaceMatch
// Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
type FaceMatch struct {
	Face       *Face    `json:"Face,omitempty"`
	Similarity *float32 `json:"Similarity,omitempty"`
}
