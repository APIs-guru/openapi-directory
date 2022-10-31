package shared



type Landmark struct {
    Type *LandmarkTypeEnum `json:"Type,omitempty"`
    X *float32 `json:"X,omitempty"`
    Y *float32 `json:"Y,omitempty"`
    
}

