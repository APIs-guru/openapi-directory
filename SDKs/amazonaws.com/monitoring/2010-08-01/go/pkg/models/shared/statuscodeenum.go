package shared

type StatusCodeEnum string

const (
	StatusCodeEnumComplete      StatusCodeEnum = "Complete"
	StatusCodeEnumInternalError StatusCodeEnum = "InternalError"
	StatusCodeEnumPartialData   StatusCodeEnum = "PartialData"
)
