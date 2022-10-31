package shared



type ConnectedDevice struct {
    Device Device `json:"device"`
    EnabledProfiles int32 `json:"enabled_profiles"`
    
}

