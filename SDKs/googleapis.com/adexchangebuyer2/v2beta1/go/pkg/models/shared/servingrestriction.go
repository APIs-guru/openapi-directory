package shared

type ServingRestrictionStatusEnum string

const (
	ServingRestrictionStatusEnumStatusUnspecified ServingRestrictionStatusEnum = "STATUS_UNSPECIFIED"
	ServingRestrictionStatusEnumDisapproval       ServingRestrictionStatusEnum = "DISAPPROVAL"
	ServingRestrictionStatusEnumPendingReview     ServingRestrictionStatusEnum = "PENDING_REVIEW"
)

// ServingRestriction
// Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
type ServingRestriction struct {
	Contexts           []ServingContext              `json:"contexts,omitempty"`
	Disapproval        *Disapproval                  `json:"disapproval,omitempty"`
	DisapprovalReasons []Disapproval                 `json:"disapprovalReasons,omitempty"`
	Status             *ServingRestrictionStatusEnum `json:"status,omitempty"`
}
