package shared

type TargetingValueCreativeSize struct {
	AllowedFormats   []string             `json:"allowedFormats,omitempty"`
	CompanionSizes   []TargetingValueSize `json:"companionSizes,omitempty"`
	CreativeSizeType *string              `json:"creativeSizeType,omitempty"`
	NativeTemplate   *string              `json:"nativeTemplate,omitempty"`
	Size             *TargetingValueSize  `json:"size,omitempty"`
	SkippableAdType  *string              `json:"skippableAdType,omitempty"`
}
