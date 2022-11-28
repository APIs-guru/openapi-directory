package shared

// QuestionDifference
// A question difference return object.
type QuestionDifference struct {
	DifferenceStatus *DifferenceStatusEnum `json:"DifferenceStatus,omitempty"`
	QuestionID       *string               `json:"QuestionId,omitempty"`
	QuestionTitle    *string               `json:"QuestionTitle,omitempty"`
}
