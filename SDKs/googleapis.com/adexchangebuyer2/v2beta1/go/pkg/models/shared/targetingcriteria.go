package shared

type TargetingCriteria struct {
	Exclusions []TargetingValue `json:"exclusions"`
	Inclusions []TargetingValue `json:"inclusions"`
	Key        *string          `json:"key"`
}
