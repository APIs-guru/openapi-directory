package shared

type AttributeTypeEnum string

const (
	AttributeTypeEnumInclusive AttributeTypeEnum = "INCLUSIVE"
	AttributeTypeEnumExclusive AttributeTypeEnum = "EXCLUSIVE"
	AttributeTypeEnumContains  AttributeTypeEnum = "CONTAINS"
	AttributeTypeEnumBefore    AttributeTypeEnum = "BEFORE"
	AttributeTypeEnumAfter     AttributeTypeEnum = "AFTER"
	AttributeTypeEnumOn        AttributeTypeEnum = "ON"
	AttributeTypeEnumBetween   AttributeTypeEnum = "BETWEEN"
)
