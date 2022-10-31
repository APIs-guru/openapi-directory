package shared

type NightModeParams struct {
	DeviceOverrideDoNotDisturb int32    `json:"device_override_do_not_disturb"`
	DoNotDisturb               bool     `json:"do_not_disturb"`
	Enabled                    bool     `json:"enabled"`
	LedBrightness              float64  `json:"led_brightness"`
	Volume                     float64  `json:"volume"`
	Windows                    []Window `json:"windows"`
}
