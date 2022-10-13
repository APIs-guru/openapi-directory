package shared

type ReviewResultDetail struct {
	ActionID    *string `json:"ActionId"`
	Key         *string `json:"Key"`
	QuestionID  *string `json:"QuestionId"`
	SubjectID   *string `json:"SubjectId"`
	SubjectType *string `json:"SubjectType"`
	Value       *string `json:"Value"`
}
