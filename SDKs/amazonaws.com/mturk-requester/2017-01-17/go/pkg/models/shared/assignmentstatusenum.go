package shared

type AssignmentStatusEnum string

const (
	AssignmentStatusEnumSubmitted AssignmentStatusEnum = "Submitted"
	AssignmentStatusEnumApproved  AssignmentStatusEnum = "Approved"
	AssignmentStatusEnumRejected  AssignmentStatusEnum = "Rejected"
)
