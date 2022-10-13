package shared

type PillarDifference struct {
	DifferenceStatus    *DifferenceStatusEnum `json:"DifferenceStatus"`
	PillarID            *string               `json:"PillarId"`
	QuestionDifferences []QuestionDifference  `json:"QuestionDifferences"`
}
