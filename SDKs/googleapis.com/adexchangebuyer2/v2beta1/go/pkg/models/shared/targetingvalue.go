package shared

// TargetingValue
// A polymorphic targeting value used as part of Shared Targeting.
type TargetingValue struct {
	CreativeSizeValue     *CreativeSize     `json:"creativeSizeValue,omitempty"`
	DayPartTargetingValue *DayPartTargeting `json:"dayPartTargetingValue,omitempty"`
	LongValue             *string           `json:"longValue,omitempty"`
	StringValue           *string           `json:"stringValue,omitempty"`
}
