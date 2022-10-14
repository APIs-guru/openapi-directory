package shared

type StatusDataModel struct {
	Archived       *bool  `json:"archived,omitempty"`
	Data           *bool  `json:"data,omitempty"`
	Escalate       *bool  `json:"escalate,omitempty"`
	Feedback       *bool  `json:"feedback,omitempty"`
	Lock           *bool  `json:"lock,omitempty"`
	ReadyAccepted  *bool  `json:"ready_accepted,omitempty"`
	ReadyAttempts  *int64 `json:"ready_attempts,omitempty"`
	Reject         *bool  `json:"reject,omitempty"`
	RejectAccepted *bool  `json:"reject_accepted,omitempty"`
	RejectAttempts *int64 `json:"reject_attempts,omitempty"`
	Sampling       *bool  `json:"sampling,omitempty"`
	SubmitAccepted *bool  `json:"submit_accepted,omitempty"`
	SubmitAttempts *int64 `json:"submit_attempts,omitempty"`
	Success        *bool  `json:"success,omitempty"`
}
