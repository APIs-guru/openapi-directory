package shared



type ProtectionGroupLimits struct {
    MaxProtectionGroups int64 `json:"MaxProtectionGroups"`
    PatternTypeLimits ProtectionGroupPatternTypeLimits `json:"PatternTypeLimits"`
    
}

