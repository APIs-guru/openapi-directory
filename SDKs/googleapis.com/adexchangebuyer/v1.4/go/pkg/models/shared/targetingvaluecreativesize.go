package shared

type TargetingValueCreativeSize struct {
	AllowedFormats   []string             `json:"allowedFormats"`
	CompanionSizes   []TargetingValueSize `json:"companionSizes"`
	CreativeSizeType *string              `json:"creativeSizeType"`
	NativeTemplate   *string              `json:"nativeTemplate"`
	Size             *TargetingValueSize  `json:"size"`
	SkippableAdType  *string              `json:"skippableAdType"`
}
