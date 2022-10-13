package shared

type NightModesettingsRequest struct {
	DemoToUser    bool     `json:"demo_to_user"`
	DoNotDisturb  bool     `json:"do_not_disturb"`
	Enabled       bool     `json:"enabled"`
	LedBrightness float64  `json:"led_brightness"`
	Volume        float64  `json:"volume"`
	Windows       []Window `json:"windows"`
}
