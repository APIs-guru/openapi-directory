package shared

type DayPartTargetingTimeZoneTypeEnum string

const (
	DayPartTargetingTimeZoneTypeEnumTimeZoneTypeUnspecified DayPartTargetingTimeZoneTypeEnum = "TIME_ZONE_TYPE_UNSPECIFIED"
	DayPartTargetingTimeZoneTypeEnumSeller                  DayPartTargetingTimeZoneTypeEnum = "SELLER"
	DayPartTargetingTimeZoneTypeEnumUser                    DayPartTargetingTimeZoneTypeEnum = "USER"
)

type DayPartTargeting struct {
	DayParts     []DayPart                         `json:"dayParts"`
	TimeZoneType *DayPartTargetingTimeZoneTypeEnum `json:"timeZoneType"`
}
