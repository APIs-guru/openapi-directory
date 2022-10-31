package shared




type DayPartTargetingTimeZoneTypeEnum string

const (
    DayPartTargetingTimeZoneTypeEnumTimeZoneTypeUnspecified DayPartTargetingTimeZoneTypeEnum = "TIME_ZONE_TYPE_UNSPECIFIED"
DayPartTargetingTimeZoneTypeEnumSeller DayPartTargetingTimeZoneTypeEnum = "SELLER"
DayPartTargetingTimeZoneTypeEnumUser DayPartTargetingTimeZoneTypeEnum = "USER"
)


type DayPartTargeting struct {
    DayParts []DayPart `json:"dayParts,omitempty"`
    TimeZoneType *DayPartTargetingTimeZoneTypeEnum `json:"timeZoneType,omitempty"`
    
}

