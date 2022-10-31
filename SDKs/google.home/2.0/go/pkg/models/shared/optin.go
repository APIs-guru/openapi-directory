package shared

type OptIn struct {
	AudioHdr           bool  `json:"audio_hdr"`
	AudioSurroundMode  int32 `json:"audio_surround_mode"`
	AutoplayOnSignal   bool  `json:"autoplay_on_signal"`
	CloudIpc           bool  `json:"cloud_ipc"`
	HdmiPrefer50hz     bool  `json:"hdmi_prefer_50hz"`
	HdmiPreferHighFps  bool  `json:"hdmi_prefer_high_fps"`
	ManagedMode        bool  `json:"managed_mode"`
	Opencast           bool  `json:"opencast"`
	PreviewChannel     bool  `json:"preview_channel"`
	RemoteDucking      bool  `json:"remote_ducking"`
	Stats              bool  `json:"stats"`
	UIFlipped          bool  `json:"ui_flipped"`
	Wpa3SupportEnabled bool  `json:"wpa3_support_enabled"`
}
