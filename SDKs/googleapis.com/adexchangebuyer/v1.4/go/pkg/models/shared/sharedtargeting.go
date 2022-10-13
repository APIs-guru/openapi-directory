package shared

type SharedTargeting struct {
	Exclusions []TargetingValue `json:"exclusions"`
	Inclusions []TargetingValue `json:"inclusions"`
	Key        *string          `json:"key"`
}
