package shared



type PlaybackKeyPair struct {
    Arn *string `json:"arn,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

