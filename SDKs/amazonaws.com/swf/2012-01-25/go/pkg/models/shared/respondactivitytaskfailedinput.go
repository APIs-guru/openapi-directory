package shared

type RespondActivityTaskFailedInput struct {
	Details   *string `json:"details"`
	Reason    *string `json:"reason"`
	TaskToken string  `json:"taskToken"`
}
