package shared



type Setup struct {
    QrSsidSuffix string `json:"qr_ssid_suffix"`
    SetupState int32 `json:"setup_state"`
    SsidSuffix string `json:"ssid_suffix"`
    Stats Stats `json:"stats"`
    TosAccepted bool `json:"tos_accepted"`
    
}

