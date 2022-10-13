package shared

type TargetingValue struct {
	CreativeSizeValue     *CreativeSize     `json:"creativeSizeValue"`
	DayPartTargetingValue *DayPartTargeting `json:"dayPartTargetingValue"`
	LongValue             *string           `json:"longValue"`
	StringValue           *string           `json:"stringValue"`
}
