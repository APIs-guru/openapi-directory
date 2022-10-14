package shared

type SharedTargeting struct {
	Exclusions []TargetingValue `json:"exclusions,omitempty"`
	Inclusions []TargetingValue `json:"inclusions,omitempty"`
	Key        *string          `json:"key,omitempty"`
}
