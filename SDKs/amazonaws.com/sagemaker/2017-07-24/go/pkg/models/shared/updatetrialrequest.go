package shared

type UpdateTrialRequest struct {
	DisplayName *string `json:"DisplayName,omitempty"`
	TrialName   string  `json:"TrialName"`
}
