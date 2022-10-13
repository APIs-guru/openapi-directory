package shared

type CompareFacesMatch struct {
	Face       *ComparedFace `json:"Face"`
	Similarity *float32      `json:"Similarity"`
}
