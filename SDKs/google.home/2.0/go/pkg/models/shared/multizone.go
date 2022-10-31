package shared



type Multizone struct {
    AudioOutputDelay int32 `json:"audio_output_delay"`
    AudioOutputDelayHdmi int32 `json:"audio_output_delay_hdmi"`
    AudioOutputDelayOem int32 `json:"audio_output_delay_oem"`
    AuxInGroup string `json:"aux_in_group"`
    DynamicGroups []string `json:"dynamic_groups"`
    Groups []string `json:"groups"`
    MultichannelStatus int32 `json:"multichannel_status"`
    
}

