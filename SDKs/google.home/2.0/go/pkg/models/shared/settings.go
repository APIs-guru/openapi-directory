package shared

type Settings struct {
	ClosedCaption        map[string]interface{} `json:"closed_caption"`
	ControlNotifications int32                  `json:"control_notifications"`
	CountryCode          string                 `json:"country_code"`
	Locale               string                 `json:"locale"`
	NetworkStandby       int32                  `json:"network_standby"`
	SystemSoundEffects   bool                   `json:"system_sound_effects"`
	TimeFormat           int32                  `json:"time_format"`
	Timezone             string                 `json:"timezone"`
	WakeOnCast           int32                  `json:"wake_on_cast"`
}
