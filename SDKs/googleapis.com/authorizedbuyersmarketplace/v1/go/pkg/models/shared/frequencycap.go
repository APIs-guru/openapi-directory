package shared




type FrequencyCapTimeUnitTypeEnum string

const (
    FrequencyCapTimeUnitTypeEnumTimeUnitTypeUnspecified FrequencyCapTimeUnitTypeEnum = "TIME_UNIT_TYPE_UNSPECIFIED"
FrequencyCapTimeUnitTypeEnumMinute FrequencyCapTimeUnitTypeEnum = "MINUTE"
FrequencyCapTimeUnitTypeEnumHour FrequencyCapTimeUnitTypeEnum = "HOUR"
FrequencyCapTimeUnitTypeEnumDay FrequencyCapTimeUnitTypeEnum = "DAY"
FrequencyCapTimeUnitTypeEnumWeek FrequencyCapTimeUnitTypeEnum = "WEEK"
FrequencyCapTimeUnitTypeEnumMonth FrequencyCapTimeUnitTypeEnum = "MONTH"
FrequencyCapTimeUnitTypeEnumLifetime FrequencyCapTimeUnitTypeEnum = "LIFETIME"
FrequencyCapTimeUnitTypeEnumPod FrequencyCapTimeUnitTypeEnum = "POD"
FrequencyCapTimeUnitTypeEnumStream FrequencyCapTimeUnitTypeEnum = "STREAM"
)


type FrequencyCap struct {
    MaxImpressions *int32 `json:"maxImpressions,omitempty"`
    TimeUnitType *FrequencyCapTimeUnitTypeEnum `json:"timeUnitType,omitempty"`
    TimeUnitsCount *int32 `json:"timeUnitsCount,omitempty"`
    
}

