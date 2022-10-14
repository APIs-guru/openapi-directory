package shared

type PretargetingConfigDimensions struct {
	Height *string `json:"height,omitempty"`
	Width  *string `json:"width,omitempty"`
}

type PretargetingConfigExcludedPlacements struct {
	Token *string `json:"token,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type PretargetingConfigPlacements struct {
	Token *string `json:"token,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type PretargetingConfigVideoPlayerSizes struct {
	AspectRatio *string `json:"aspectRatio,omitempty"`
	MinHeight   *string `json:"minHeight,omitempty"`
	MinWidth    *string `json:"minWidth,omitempty"`
}

type PretargetingConfig struct {
	BillingID                     *string                                `json:"billingId,omitempty"`
	ConfigID                      *string                                `json:"configId,omitempty"`
	ConfigName                    *string                                `json:"configName,omitempty"`
	CreativeType                  []string                               `json:"creativeType,omitempty"`
	Dimensions                    []PretargetingConfigDimensions         `json:"dimensions,omitempty"`
	ExcludedContentLabels         []string                               `json:"excludedContentLabels,omitempty"`
	ExcludedGeoCriteriaIds        []string                               `json:"excludedGeoCriteriaIds,omitempty"`
	ExcludedPlacements            []PretargetingConfigExcludedPlacements `json:"excludedPlacements,omitempty"`
	ExcludedUserLists             []string                               `json:"excludedUserLists,omitempty"`
	ExcludedVerticals             []string                               `json:"excludedVerticals,omitempty"`
	GeoCriteriaIds                []string                               `json:"geoCriteriaIds,omitempty"`
	IsActive                      *bool                                  `json:"isActive,omitempty"`
	Kind                          *string                                `json:"kind,omitempty"`
	Languages                     []string                               `json:"languages,omitempty"`
	MaximumQPS                    *string                                `json:"maximumQps,omitempty"`
	MinimumViewabilityDecile      *int32                                 `json:"minimumViewabilityDecile,omitempty"`
	MobileCarriers                []string                               `json:"mobileCarriers,omitempty"`
	MobileDevices                 []string                               `json:"mobileDevices,omitempty"`
	MobileOperatingSystemVersions []string                               `json:"mobileOperatingSystemVersions,omitempty"`
	Placements                    []PretargetingConfigPlacements         `json:"placements,omitempty"`
	Platforms                     []string                               `json:"platforms,omitempty"`
	SupportedCreativeAttributes   []string                               `json:"supportedCreativeAttributes,omitempty"`
	UserIdentifierDataRequired    []string                               `json:"userIdentifierDataRequired,omitempty"`
	UserLists                     []string                               `json:"userLists,omitempty"`
	VendorTypes                   []string                               `json:"vendorTypes,omitempty"`
	Verticals                     []string                               `json:"verticals,omitempty"`
	VideoPlayerSizes              []PretargetingConfigVideoPlayerSizes   `json:"videoPlayerSizes,omitempty"`
}
