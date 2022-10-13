package shared

type Capabilities struct {
	AoghSupported                      bool `json:"aogh_supported"`
	AssistantSupported                 bool `json:"assistant_supported"`
	AudioHdrSupported                  bool `json:"audio_hdr_supported"`
	AudioSurroundModeSupported         bool `json:"audio_surround_mode_supported"`
	BleSupported                       bool `json:"ble_supported"`
	BluetoothAudioSinkSupported        bool `json:"bluetooth_audio_sink_supported"`
	BluetoothAudioSourceSupported      bool `json:"bluetooth_audio_source_supported"`
	BluetoothSupported                 bool `json:"bluetooth_supported"`
	CloudcastSupported                 bool `json:"cloudcast_supported"`
	ContentFiltersSupported            bool `json:"content_filters_supported"`
	DisplaySupported                   bool `json:"display_supported"`
	FdrSupported                       bool `json:"fdr_supported"`
	HdmiPrefer50hzSupported            bool `json:"hdmi_prefer_50hz_supported"`
	HdmiPreferHighFpsSupported         bool `json:"hdmi_prefer_high_fps_supported"`
	HotspotSupported                   bool `json:"hotspot_supported"`
	HTTPSSetupSupported                bool `json:"https_setup_supported"`
	InputManagementSupported           bool `json:"input_management_supported"`
	KeepHotspotUntilConnectedSupported bool `json:"keep_hotspot_until_connected_supported"`
	MultiUserSupported                 bool `json:"multi_user_supported"`
	MultichannelGroupSupported         bool `json:"multichannel_group_supported"`
	MultizoneSupported                 bool `json:"multizone_supported"`
	NightModeSupported                 bool `json:"night_mode_supported"`
	NightModeSupportedV2               bool `json:"night_mode_supported_v2"`
	OpencastSupported                  bool `json:"opencast_supported"`
	PreviewChannelSupported            bool `json:"preview_channel_supported"`
	RebootSupported                    bool `json:"reboot_supported"`
	RemoteDuckingSupported             bool `json:"remote_ducking_supported"`
	SeparateTtsVolumeSupported         bool `json:"separate_tts_volume_supported"`
	SetupSupported                     bool `json:"setup_supported"`
	SleepModeSupported                 bool `json:"sleep_mode_supported"`
	StatsSupported                     bool `json:"stats_supported"`
	SystemSoundEffectsSupported        bool `json:"system_sound_effects_supported"`
	UserEqSupported                    bool `json:"user_eq_supported"`
	WifiAutoSaveSupported              bool `json:"wifi_auto_save_supported"`
	WifiRegulatoryDomainLocked         bool `json:"wifi_regulatory_domain_locked"`
	WifiSupported                      bool `json:"wifi_supported"`
}
