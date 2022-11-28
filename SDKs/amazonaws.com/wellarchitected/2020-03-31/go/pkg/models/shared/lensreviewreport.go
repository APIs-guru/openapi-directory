package shared

// LensReviewReport
// A report of a lens review.
type LensReviewReport struct {
	Base64String *string `json:"Base64String,omitempty"`
	LensAlias    *string `json:"LensAlias,omitempty"`
}
