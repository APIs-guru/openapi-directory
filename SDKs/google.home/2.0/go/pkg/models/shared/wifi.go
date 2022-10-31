package shared



type Wifi struct {
    Bssid string `json:"bssid"`
    HasChanges bool `json:"has_changes"`
    NoiseLevel int32 `json:"noise_level"`
    SignalLevel int32 `json:"signal_level"`
    Ssid string `json:"ssid"`
    WpaConfigured bool `json:"wpa_configured"`
    WpaID int32 `json:"wpa_id"`
    WpaState int32 `json:"wpa_state"`
    
}

