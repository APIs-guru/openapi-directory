package shared

type FailureInfoErrorCodeEnum string

const (
	FailureInfoErrorCodeEnumOk                 FailureInfoErrorCodeEnum = "OK"
	FailureInfoErrorCodeEnumCancelled          FailureInfoErrorCodeEnum = "CANCELLED"
	FailureInfoErrorCodeEnumUnknown            FailureInfoErrorCodeEnum = "UNKNOWN"
	FailureInfoErrorCodeEnumInvalidArgument    FailureInfoErrorCodeEnum = "INVALID_ARGUMENT"
	FailureInfoErrorCodeEnumDeadlineExceeded   FailureInfoErrorCodeEnum = "DEADLINE_EXCEEDED"
	FailureInfoErrorCodeEnumNotFound           FailureInfoErrorCodeEnum = "NOT_FOUND"
	FailureInfoErrorCodeEnumAlreadyExists      FailureInfoErrorCodeEnum = "ALREADY_EXISTS"
	FailureInfoErrorCodeEnumPermissionDenied   FailureInfoErrorCodeEnum = "PERMISSION_DENIED"
	FailureInfoErrorCodeEnumUnauthenticated    FailureInfoErrorCodeEnum = "UNAUTHENTICATED"
	FailureInfoErrorCodeEnumResourceExhausted  FailureInfoErrorCodeEnum = "RESOURCE_EXHAUSTED"
	FailureInfoErrorCodeEnumFailedPrecondition FailureInfoErrorCodeEnum = "FAILED_PRECONDITION"
	FailureInfoErrorCodeEnumAborted            FailureInfoErrorCodeEnum = "ABORTED"
	FailureInfoErrorCodeEnumOutOfRange         FailureInfoErrorCodeEnum = "OUT_OF_RANGE"
	FailureInfoErrorCodeEnumUnimplemented      FailureInfoErrorCodeEnum = "UNIMPLEMENTED"
	FailureInfoErrorCodeEnumInternal           FailureInfoErrorCodeEnum = "INTERNAL"
	FailureInfoErrorCodeEnumUnavailable        FailureInfoErrorCodeEnum = "UNAVAILABLE"
	FailureInfoErrorCodeEnumDataLoss           FailureInfoErrorCodeEnum = "DATA_LOSS"
)

type FailureInfo struct {
	ErrorCode    *FailureInfoErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string                   `json:"errorMessage,omitempty"`
	Printer      *Printer                  `json:"printer,omitempty"`
	PrinterID    *string                   `json:"printerId,omitempty"`
}
