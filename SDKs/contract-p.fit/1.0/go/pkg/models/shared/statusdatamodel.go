package shared

type StatusDataModel struct {
	Archived       *bool  `json:"archived"`
	Data           *bool  `json:"data"`
	Escalate       *bool  `json:"escalate"`
	Feedback       *bool  `json:"feedback"`
	Lock           *bool  `json:"lock"`
	ReadyAccepted  *bool  `json:"ready_accepted"`
	ReadyAttempts  *int64 `json:"ready_attempts"`
	Reject         *bool  `json:"reject"`
	RejectAccepted *bool  `json:"reject_accepted"`
	RejectAttempts *int64 `json:"reject_attempts"`
	Sampling       *bool  `json:"sampling"`
	SubmitAccepted *bool  `json:"submit_accepted"`
	SubmitAttempts *int64 `json:"submit_attempts"`
	Success        *bool  `json:"success"`
}
