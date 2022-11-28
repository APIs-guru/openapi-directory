package shared

// ProtectionGroupLimits
// Limits settings on protection groups for your subscription.
type ProtectionGroupLimits struct {
	MaxProtectionGroups int64                            `json:"MaxProtectionGroups"`
	PatternTypeLimits   ProtectionGroupPatternTypeLimits `json:"PatternTypeLimits"`
}
