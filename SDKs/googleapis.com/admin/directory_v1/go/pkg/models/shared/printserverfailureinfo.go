package shared

type PrintServerFailureInfoErrorCodeEnum string

const (
	PrintServerFailureInfoErrorCodeEnumOk                 PrintServerFailureInfoErrorCodeEnum = "OK"
	PrintServerFailureInfoErrorCodeEnumCancelled          PrintServerFailureInfoErrorCodeEnum = "CANCELLED"
	PrintServerFailureInfoErrorCodeEnumUnknown            PrintServerFailureInfoErrorCodeEnum = "UNKNOWN"
	PrintServerFailureInfoErrorCodeEnumInvalidArgument    PrintServerFailureInfoErrorCodeEnum = "INVALID_ARGUMENT"
	PrintServerFailureInfoErrorCodeEnumDeadlineExceeded   PrintServerFailureInfoErrorCodeEnum = "DEADLINE_EXCEEDED"
	PrintServerFailureInfoErrorCodeEnumNotFound           PrintServerFailureInfoErrorCodeEnum = "NOT_FOUND"
	PrintServerFailureInfoErrorCodeEnumAlreadyExists      PrintServerFailureInfoErrorCodeEnum = "ALREADY_EXISTS"
	PrintServerFailureInfoErrorCodeEnumPermissionDenied   PrintServerFailureInfoErrorCodeEnum = "PERMISSION_DENIED"
	PrintServerFailureInfoErrorCodeEnumUnauthenticated    PrintServerFailureInfoErrorCodeEnum = "UNAUTHENTICATED"
	PrintServerFailureInfoErrorCodeEnumResourceExhausted  PrintServerFailureInfoErrorCodeEnum = "RESOURCE_EXHAUSTED"
	PrintServerFailureInfoErrorCodeEnumFailedPrecondition PrintServerFailureInfoErrorCodeEnum = "FAILED_PRECONDITION"
	PrintServerFailureInfoErrorCodeEnumAborted            PrintServerFailureInfoErrorCodeEnum = "ABORTED"
	PrintServerFailureInfoErrorCodeEnumOutOfRange         PrintServerFailureInfoErrorCodeEnum = "OUT_OF_RANGE"
	PrintServerFailureInfoErrorCodeEnumUnimplemented      PrintServerFailureInfoErrorCodeEnum = "UNIMPLEMENTED"
	PrintServerFailureInfoErrorCodeEnumInternal           PrintServerFailureInfoErrorCodeEnum = "INTERNAL"
	PrintServerFailureInfoErrorCodeEnumUnavailable        PrintServerFailureInfoErrorCodeEnum = "UNAVAILABLE"
	PrintServerFailureInfoErrorCodeEnumDataLoss           PrintServerFailureInfoErrorCodeEnum = "DATA_LOSS"
)

type PrintServerFailureInfo struct {
	ErrorCode     *PrintServerFailureInfoErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage  *string                              `json:"errorMessage,omitempty"`
	PrintServer   *PrintServer                         `json:"printServer,omitempty"`
	PrintServerID *string                              `json:"printServerId,omitempty"`
}
