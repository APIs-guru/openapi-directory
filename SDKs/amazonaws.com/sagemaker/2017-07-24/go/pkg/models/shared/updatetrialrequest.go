package shared

type UpdateTrialRequest struct {
	DisplayName *string `json:"DisplayName"`
	TrialName   string  `json:"TrialName"`
}
