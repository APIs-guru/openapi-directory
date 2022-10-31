package shared

type ItemTypeEnum string

const (
	ItemTypeEnumAnalysis   ItemTypeEnum = "ANALYSIS"
	ItemTypeEnumIncident   ItemTypeEnum = "INCIDENT"
	ItemTypeEnumMetric     ItemTypeEnum = "METRIC"
	ItemTypeEnumParent     ItemTypeEnum = "PARENT"
	ItemTypeEnumAttachment ItemTypeEnum = "ATTACHMENT"
	ItemTypeEnumOther      ItemTypeEnum = "OTHER"
)
