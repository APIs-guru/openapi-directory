package shared

type TargetingValue struct {
	CreativeSizeValue             *TargetingValueCreativeSize             `json:"creativeSizeValue"`
	DayPartTargetingValue         *TargetingValueDayPartTargeting         `json:"dayPartTargetingValue"`
	DemogAgeCriteriaValue         *TargetingValueDemogAgeCriteria         `json:"demogAgeCriteriaValue"`
	DemogGenderCriteriaValue      *TargetingValueDemogGenderCriteria      `json:"demogGenderCriteriaValue"`
	LongValue                     *string                                 `json:"longValue"`
	RequestPlatformTargetingValue *TargetingValueRequestPlatformTargeting `json:"requestPlatformTargetingValue"`
	StringValue                   *string                                 `json:"stringValue"`
}
