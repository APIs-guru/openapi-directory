package shared

// TargetingCriteria
// Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
type TargetingCriteria struct {
	Exclusions []TargetingValue `json:"exclusions,omitempty"`
	Inclusions []TargetingValue `json:"inclusions,omitempty"`
	Key        *string          `json:"key,omitempty"`
}
