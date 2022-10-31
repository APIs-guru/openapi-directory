package shared



type Action struct {
    LambdaConfiguration *LambdaConfiguration `json:"LambdaConfiguration,omitempty"`
    SnsConfiguration *SnsConfiguration `json:"SNSConfiguration,omitempty"`
    
}

