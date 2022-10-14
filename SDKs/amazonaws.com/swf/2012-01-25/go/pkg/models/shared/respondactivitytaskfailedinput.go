package shared

type RespondActivityTaskFailedInput struct {
	Details   *string `json:"details,omitempty"`
	Reason    *string `json:"reason,omitempty"`
	TaskToken string  `json:"taskToken"`
}
