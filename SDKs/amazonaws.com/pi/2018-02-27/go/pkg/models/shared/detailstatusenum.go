package shared

type DetailStatusEnum string

const (
	DetailStatusEnumAvailable   DetailStatusEnum = "AVAILABLE"
	DetailStatusEnumProcessing  DetailStatusEnum = "PROCESSING"
	DetailStatusEnumUnavailable DetailStatusEnum = "UNAVAILABLE"
)
