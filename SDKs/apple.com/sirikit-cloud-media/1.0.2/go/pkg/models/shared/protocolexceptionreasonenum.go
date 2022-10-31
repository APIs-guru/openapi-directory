package shared

type ProtocolExceptionReasonEnum string

const (
	ProtocolExceptionReasonEnumUnsupported  ProtocolExceptionReasonEnum = "unsupported"
	ProtocolExceptionReasonEnumUnauthorized ProtocolExceptionReasonEnum = "unauthorized"
	ProtocolExceptionReasonEnumUnexpected   ProtocolExceptionReasonEnum = "unexpected"
	ProtocolExceptionReasonEnumInvalid      ProtocolExceptionReasonEnum = "invalid"
	ProtocolExceptionReasonEnumUnparseable  ProtocolExceptionReasonEnum = "unparseable"
	ProtocolExceptionReasonEnumDeprecated   ProtocolExceptionReasonEnum = "deprecated"
	ProtocolExceptionReasonEnumInternal     ProtocolExceptionReasonEnum = "internal"
	ProtocolExceptionReasonEnumComplex      ProtocolExceptionReasonEnum = "complex"
	ProtocolExceptionReasonEnumBusy         ProtocolExceptionReasonEnum = "busy"
)
