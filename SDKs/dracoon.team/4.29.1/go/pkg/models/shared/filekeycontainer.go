package shared



type FileKeyContainer struct {
    Iv string `json:"iv"`
    Key string `json:"key"`
    Tag *string `json:"tag,omitempty"`
    Version string `json:"version"`
    
}

