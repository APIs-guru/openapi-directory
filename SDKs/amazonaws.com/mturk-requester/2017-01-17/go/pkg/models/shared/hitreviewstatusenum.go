package shared

type HitReviewStatusEnum string

const (
	HitReviewStatusEnumNotReviewed           HitReviewStatusEnum = "NotReviewed"
	HitReviewStatusEnumMarkedForReview       HitReviewStatusEnum = "MarkedForReview"
	HitReviewStatusEnumReviewedAppropriate   HitReviewStatusEnum = "ReviewedAppropriate"
	HitReviewStatusEnumReviewedInappropriate HitReviewStatusEnum = "ReviewedInappropriate"
)
