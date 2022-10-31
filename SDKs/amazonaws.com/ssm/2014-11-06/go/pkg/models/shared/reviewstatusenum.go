package shared

type ReviewStatusEnum string

const (
	ReviewStatusEnumApproved    ReviewStatusEnum = "APPROVED"
	ReviewStatusEnumNotReviewed ReviewStatusEnum = "NOT_REVIEWED"
	ReviewStatusEnumPending     ReviewStatusEnum = "PENDING"
	ReviewStatusEnumRejected    ReviewStatusEnum = "REJECTED"
)
