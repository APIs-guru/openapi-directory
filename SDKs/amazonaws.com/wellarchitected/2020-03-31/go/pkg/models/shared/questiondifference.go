package shared

type QuestionDifference struct {
	DifferenceStatus *DifferenceStatusEnum `json:"DifferenceStatus,omitempty"`
	QuestionID       *string               `json:"QuestionId,omitempty"`
	QuestionTitle    *string               `json:"QuestionTitle,omitempty"`
}
