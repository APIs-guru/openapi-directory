package shared



type FaceMatch struct {
    Face *Face `json:"Face,omitempty"`
    Similarity *float32 `json:"Similarity,omitempty"`
    
}

