package shared

type PretargetingConfigDimensions struct {
	Height *string `json:"height"`
	Width  *string `json:"width"`
}

type PretargetingConfigExcludedPlacements struct {
	Token *string `json:"token"`
	Type  *string `json:"type"`
}

type PretargetingConfigPlacements struct {
	Token *string `json:"token"`
	Type  *string `json:"type"`
}

type PretargetingConfigVideoPlayerSizes struct {
	AspectRatio *string `json:"aspectRatio"`
	MinHeight   *string `json:"minHeight"`
	MinWidth    *string `json:"minWidth"`
}

type PretargetingConfig struct {
	BillingID                     *string                                `json:"billingId"`
	ConfigID                      *string                                `json:"configId"`
	ConfigName                    *string                                `json:"configName"`
	CreativeType                  []string                               `json:"creativeType"`
	Dimensions                    []PretargetingConfigDimensions         `json:"dimensions"`
	ExcludedContentLabels         []string                               `json:"excludedContentLabels"`
	ExcludedGeoCriteriaIds        []string                               `json:"excludedGeoCriteriaIds"`
	ExcludedPlacements            []PretargetingConfigExcludedPlacements `json:"excludedPlacements"`
	ExcludedUserLists             []string                               `json:"excludedUserLists"`
	ExcludedVerticals             []string                               `json:"excludedVerticals"`
	GeoCriteriaIds                []string                               `json:"geoCriteriaIds"`
	IsActive                      *bool                                  `json:"isActive"`
	Kind                          *string                                `json:"kind"`
	Languages                     []string                               `json:"languages"`
	MaximumQPS                    *string                                `json:"maximumQps"`
	MinimumViewabilityDecile      *int32                                 `json:"minimumViewabilityDecile"`
	MobileCarriers                []string                               `json:"mobileCarriers"`
	MobileDevices                 []string                               `json:"mobileDevices"`
	MobileOperatingSystemVersions []string                               `json:"mobileOperatingSystemVersions"`
	Placements                    []PretargetingConfigPlacements         `json:"placements"`
	Platforms                     []string                               `json:"platforms"`
	SupportedCreativeAttributes   []string                               `json:"supportedCreativeAttributes"`
	UserIdentifierDataRequired    []string                               `json:"userIdentifierDataRequired"`
	UserLists                     []string                               `json:"userLists"`
	VendorTypes                   []string                               `json:"vendorTypes"`
	Verticals                     []string                               `json:"verticals"`
	VideoPlayerSizes              []PretargetingConfigVideoPlayerSizes   `json:"videoPlayerSizes"`
}
