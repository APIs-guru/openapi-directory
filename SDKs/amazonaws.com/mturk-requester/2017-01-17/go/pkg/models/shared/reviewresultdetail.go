package shared

type ReviewResultDetail struct {
	ActionID    *string `json:"ActionId,omitempty"`
	Key         *string `json:"Key,omitempty"`
	QuestionID  *string `json:"QuestionId,omitempty"`
	SubjectID   *string `json:"SubjectId,omitempty"`
	SubjectType *string `json:"SubjectType,omitempty"`
	Value       *string `json:"Value,omitempty"`
}
