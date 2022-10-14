package shared

type TargetingValue struct {
	CreativeSizeValue             *TargetingValueCreativeSize             `json:"creativeSizeValue,omitempty"`
	DayPartTargetingValue         *TargetingValueDayPartTargeting         `json:"dayPartTargetingValue,omitempty"`
	DemogAgeCriteriaValue         *TargetingValueDemogAgeCriteria         `json:"demogAgeCriteriaValue,omitempty"`
	DemogGenderCriteriaValue      *TargetingValueDemogGenderCriteria      `json:"demogGenderCriteriaValue,omitempty"`
	LongValue                     *string                                 `json:"longValue,omitempty"`
	RequestPlatformTargetingValue *TargetingValueRequestPlatformTargeting `json:"requestPlatformTargetingValue,omitempty"`
	StringValue                   *string                                 `json:"stringValue,omitempty"`
}
