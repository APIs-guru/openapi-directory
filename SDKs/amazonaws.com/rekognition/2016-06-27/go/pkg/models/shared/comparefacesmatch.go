package shared

type CompareFacesMatch struct {
	Face       *ComparedFace `json:"Face,omitempty"`
	Similarity *float32      `json:"Similarity,omitempty"`
}
