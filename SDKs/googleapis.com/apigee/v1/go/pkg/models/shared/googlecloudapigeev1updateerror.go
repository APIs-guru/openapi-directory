package shared

type GoogleCloudApigeeV1UpdateErrorCodeEnum string

const (
	GoogleCloudApigeeV1UpdateErrorCodeEnumOk                 GoogleCloudApigeeV1UpdateErrorCodeEnum = "OK"
	GoogleCloudApigeeV1UpdateErrorCodeEnumCancelled          GoogleCloudApigeeV1UpdateErrorCodeEnum = "CANCELLED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumUnknown            GoogleCloudApigeeV1UpdateErrorCodeEnum = "UNKNOWN"
	GoogleCloudApigeeV1UpdateErrorCodeEnumInvalidArgument    GoogleCloudApigeeV1UpdateErrorCodeEnum = "INVALID_ARGUMENT"
	GoogleCloudApigeeV1UpdateErrorCodeEnumDeadlineExceeded   GoogleCloudApigeeV1UpdateErrorCodeEnum = "DEADLINE_EXCEEDED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumNotFound           GoogleCloudApigeeV1UpdateErrorCodeEnum = "NOT_FOUND"
	GoogleCloudApigeeV1UpdateErrorCodeEnumAlreadyExists      GoogleCloudApigeeV1UpdateErrorCodeEnum = "ALREADY_EXISTS"
	GoogleCloudApigeeV1UpdateErrorCodeEnumPermissionDenied   GoogleCloudApigeeV1UpdateErrorCodeEnum = "PERMISSION_DENIED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumUnauthenticated    GoogleCloudApigeeV1UpdateErrorCodeEnum = "UNAUTHENTICATED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumResourceExhausted  GoogleCloudApigeeV1UpdateErrorCodeEnum = "RESOURCE_EXHAUSTED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumFailedPrecondition GoogleCloudApigeeV1UpdateErrorCodeEnum = "FAILED_PRECONDITION"
	GoogleCloudApigeeV1UpdateErrorCodeEnumAborted            GoogleCloudApigeeV1UpdateErrorCodeEnum = "ABORTED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumOutOfRange         GoogleCloudApigeeV1UpdateErrorCodeEnum = "OUT_OF_RANGE"
	GoogleCloudApigeeV1UpdateErrorCodeEnumUnimplemented      GoogleCloudApigeeV1UpdateErrorCodeEnum = "UNIMPLEMENTED"
	GoogleCloudApigeeV1UpdateErrorCodeEnumInternal           GoogleCloudApigeeV1UpdateErrorCodeEnum = "INTERNAL"
	GoogleCloudApigeeV1UpdateErrorCodeEnumUnavailable        GoogleCloudApigeeV1UpdateErrorCodeEnum = "UNAVAILABLE"
	GoogleCloudApigeeV1UpdateErrorCodeEnumDataLoss           GoogleCloudApigeeV1UpdateErrorCodeEnum = "DATA_LOSS"
)

type GoogleCloudApigeeV1UpdateError struct {
	Code     *GoogleCloudApigeeV1UpdateErrorCodeEnum `json:"code"`
	Message  *string                                 `json:"message"`
	Resource *string                                 `json:"resource"`
	Type     *string                                 `json:"type"`
}
