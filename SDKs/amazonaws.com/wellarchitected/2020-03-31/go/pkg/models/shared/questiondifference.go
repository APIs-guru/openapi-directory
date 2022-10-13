package shared

type QuestionDifference struct {
	DifferenceStatus *DifferenceStatusEnum `json:"DifferenceStatus"`
	QuestionID       *string               `json:"QuestionId"`
	QuestionTitle    *string               `json:"QuestionTitle"`
}
