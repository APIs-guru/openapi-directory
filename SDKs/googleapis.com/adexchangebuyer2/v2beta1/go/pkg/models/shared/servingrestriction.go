package shared

type ServingRestrictionStatusEnum string

const (
	ServingRestrictionStatusEnumStatusUnspecified ServingRestrictionStatusEnum = "STATUS_UNSPECIFIED"
	ServingRestrictionStatusEnumDisapproval       ServingRestrictionStatusEnum = "DISAPPROVAL"
	ServingRestrictionStatusEnumPendingReview     ServingRestrictionStatusEnum = "PENDING_REVIEW"
)

type ServingRestriction struct {
	Contexts           []ServingContext              `json:"contexts"`
	Disapproval        *Disapproval                  `json:"disapproval"`
	DisapprovalReasons []Disapproval                 `json:"disapprovalReasons"`
	Status             *ServingRestrictionStatusEnum `json:"status"`
}
