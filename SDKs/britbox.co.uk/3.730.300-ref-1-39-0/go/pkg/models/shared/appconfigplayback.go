package shared



type AppConfigPlayback struct {
    ChainPlayCountdown int32 `json:"chainPlayCountdown"`
    ChainPlaySqueezeback int32 `json:"chainPlaySqueezeback"`
    ChainPlayTimeout int32 `json:"chainPlayTimeout"`
    HeartbeatFrequency int32 `json:"heartbeatFrequency"`
    ViewEventPoints []float64 `json:"viewEventPoints"`
    
}

