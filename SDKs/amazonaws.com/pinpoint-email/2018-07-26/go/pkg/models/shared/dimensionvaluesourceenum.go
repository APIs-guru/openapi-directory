package shared

type DimensionValueSourceEnum string

const (
	DimensionValueSourceEnumMessageTag  DimensionValueSourceEnum = "MESSAGE_TAG"
	DimensionValueSourceEnumEmailHeader DimensionValueSourceEnum = "EMAIL_HEADER"
	DimensionValueSourceEnumLinkTag     DimensionValueSourceEnum = "LINK_TAG"
)
