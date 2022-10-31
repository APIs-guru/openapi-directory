package shared



type Example17 struct {
    DoNotDisturb bool `json:"do_not_disturb"`
    Enabled bool `json:"enabled"`
    LedBrightness float64 `json:"led_brightness"`
    Volume float64 `json:"volume"`
    Windows []Window2 `json:"windows"`
    
}

