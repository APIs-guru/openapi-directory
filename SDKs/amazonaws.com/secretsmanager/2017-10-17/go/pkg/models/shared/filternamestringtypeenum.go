package shared

type FilterNameStringTypeEnum string

const (
	FilterNameStringTypeEnumDescription   FilterNameStringTypeEnum = "description"
	FilterNameStringTypeEnumName          FilterNameStringTypeEnum = "name"
	FilterNameStringTypeEnumTagKey        FilterNameStringTypeEnum = "tag-key"
	FilterNameStringTypeEnumTagValue      FilterNameStringTypeEnum = "tag-value"
	FilterNameStringTypeEnumPrimaryRegion FilterNameStringTypeEnum = "primary-region"
	FilterNameStringTypeEnumAll           FilterNameStringTypeEnum = "all"
)
