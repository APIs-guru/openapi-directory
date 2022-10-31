package shared



type BuildInfo struct {
    BuildType int32 `json:"build_type"`
    CastBuildRevision string `json:"cast_build_revision"`
    CastControlVersion int32 `json:"cast_control_version"`
    PreviewChannelState int32 `json:"preview_channel_state"`
    ReleaseTrack string `json:"release_track"`
    SystemBuildNumber string `json:"system_build_number"`
    
}

