package shared

type DayPartTargetingTimeZoneTypeEnum string

const (
	DayPartTargetingTimeZoneTypeEnumTimeZoneSourceUnspecified DayPartTargetingTimeZoneTypeEnum = "TIME_ZONE_SOURCE_UNSPECIFIED"
	DayPartTargetingTimeZoneTypeEnumPublisher                 DayPartTargetingTimeZoneTypeEnum = "PUBLISHER"
	DayPartTargetingTimeZoneTypeEnumUser                      DayPartTargetingTimeZoneTypeEnum = "USER"
)

type DayPartTargeting struct {
	DayParts     []DayPart                         `json:"dayParts"`
	TimeZoneType *DayPartTargetingTimeZoneTypeEnum `json:"timeZoneType"`
}
