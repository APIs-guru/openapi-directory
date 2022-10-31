package shared

type EventTypeEnum string

const (
	EventTypeEnumSend             EventTypeEnum = "SEND"
	EventTypeEnumReject           EventTypeEnum = "REJECT"
	EventTypeEnumBounce           EventTypeEnum = "BOUNCE"
	EventTypeEnumComplaint        EventTypeEnum = "COMPLAINT"
	EventTypeEnumDelivery         EventTypeEnum = "DELIVERY"
	EventTypeEnumOpen             EventTypeEnum = "OPEN"
	EventTypeEnumClick            EventTypeEnum = "CLICK"
	EventTypeEnumRenderingFailure EventTypeEnum = "RENDERING_FAILURE"
)
