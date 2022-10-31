package shared

type EventTypeEnum string

const (
	EventTypeEnumInitiatedCall EventTypeEnum = "INITIATED_CALL"
	EventTypeEnumRinging       EventTypeEnum = "RINGING"
	EventTypeEnumAnswered      EventTypeEnum = "ANSWERED"
	EventTypeEnumCompletedCall EventTypeEnum = "COMPLETED_CALL"
	EventTypeEnumBusy          EventTypeEnum = "BUSY"
	EventTypeEnumFailed        EventTypeEnum = "FAILED"
	EventTypeEnumNoAnswer      EventTypeEnum = "NO_ANSWER"
)
