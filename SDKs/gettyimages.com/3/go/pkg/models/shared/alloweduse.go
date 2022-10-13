package shared

type AllowedUse struct {
	HowCanIUseIt      *string  `json:"how_can_i_use_it"`
	ReleaseInfo       *string  `json:"release_info"`
	UsageRestrictions []string `json:"usage_restrictions"`
}
