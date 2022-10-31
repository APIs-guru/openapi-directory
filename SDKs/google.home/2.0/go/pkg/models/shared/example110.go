package shared



type Example110 struct {
    AudioMode int32 `json:"audio_mode"`
    ConnectedDevices []ConnectedDevice `json:"connected_devices"`
    ConnectingDevices []string `json:"connecting_devices"`
    DiscoveryEnabled bool `json:"discovery_enabled"`
    RemoteSink RemoteSink `json:"remote_sink"`
    ScanningEnabled bool `json:"scanning_enabled"`
    
}

