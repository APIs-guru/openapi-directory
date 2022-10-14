package shared

type AllowedUse struct {
	HowCanIUseIt      *string  `json:"how_can_i_use_it,omitempty"`
	ReleaseInfo       *string  `json:"release_info,omitempty"`
	UsageRestrictions []string `json:"usage_restrictions,omitempty"`
}
