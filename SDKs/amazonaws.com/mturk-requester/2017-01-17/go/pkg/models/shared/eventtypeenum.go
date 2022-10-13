package shared

type EventTypeEnum string

const (
	EventTypeEnumAssignmentAccepted  EventTypeEnum = "AssignmentAccepted"
	EventTypeEnumAssignmentAbandoned EventTypeEnum = "AssignmentAbandoned"
	EventTypeEnumAssignmentReturned  EventTypeEnum = "AssignmentReturned"
	EventTypeEnumAssignmentSubmitted EventTypeEnum = "AssignmentSubmitted"
	EventTypeEnumAssignmentRejected  EventTypeEnum = "AssignmentRejected"
	EventTypeEnumAssignmentApproved  EventTypeEnum = "AssignmentApproved"
	EventTypeEnumHitCreated          EventTypeEnum = "HITCreated"
	EventTypeEnumHitExpired          EventTypeEnum = "HITExpired"
	EventTypeEnumHitReviewable       EventTypeEnum = "HITReviewable"
	EventTypeEnumHitExtended         EventTypeEnum = "HITExtended"
	EventTypeEnumHitDisposed         EventTypeEnum = "HITDisposed"
	EventTypeEnumPing                EventTypeEnum = "Ping"
)
