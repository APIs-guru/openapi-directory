package shared




type ExclusionRuleExcludeDeliveryEnum string

const (
    ExclusionRuleExcludeDeliveryEnumStream ExclusionRuleExcludeDeliveryEnum = "Stream"
ExclusionRuleExcludeDeliveryEnumDownload ExclusionRuleExcludeDeliveryEnum = "Download"
ExclusionRuleExcludeDeliveryEnumStreamOrDownload ExclusionRuleExcludeDeliveryEnum = "StreamOrDownload"
ExclusionRuleExcludeDeliveryEnumProgressiveDownload ExclusionRuleExcludeDeliveryEnum = "ProgressiveDownload"
ExclusionRuleExcludeDeliveryEnumNone ExclusionRuleExcludeDeliveryEnum = "None"
)



type ExclusionRuleExcludeMinResolutionEnum string

const (
    ExclusionRuleExcludeMinResolutionEnumSd ExclusionRuleExcludeMinResolutionEnum = "SD"
ExclusionRuleExcludeMinResolutionEnumHd720 ExclusionRuleExcludeMinResolutionEnum = "HD-720"
ExclusionRuleExcludeMinResolutionEnumHd1080 ExclusionRuleExcludeMinResolutionEnum = "HD-1080"
ExclusionRuleExcludeMinResolutionEnumHd4K ExclusionRuleExcludeMinResolutionEnum = "HD-4K"
ExclusionRuleExcludeMinResolutionEnumExternal ExclusionRuleExcludeMinResolutionEnum = "External"
ExclusionRuleExcludeMinResolutionEnumUnknown ExclusionRuleExcludeMinResolutionEnum = "Unknown"
)


type ExclusionRule struct {
    Description *string `json:"description,omitempty"`
    Device *string `json:"device,omitempty"`
    ExcludeAirplay *bool `json:"excludeAirplay,omitempty"`
    ExcludeChromecast *bool `json:"excludeChromecast,omitempty"`
    ExcludeDelivery *ExclusionRuleExcludeDeliveryEnum `json:"excludeDelivery,omitempty"`
    ExcludeMinResolution *ExclusionRuleExcludeMinResolutionEnum `json:"excludeMinResolution,omitempty"`
    
}

