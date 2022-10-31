package shared



type Ec2AmiResource struct {
    AmiID string `json:"AmiId"`
    SnowballAmiID *string `json:"SnowballAmiId,omitempty"`
    
}

