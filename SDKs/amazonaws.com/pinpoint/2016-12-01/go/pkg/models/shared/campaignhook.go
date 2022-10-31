package shared

type CampaignHook struct {
	LambdaFunctionName *string   `json:"LambdaFunctionName,omitempty"`
	Mode               *ModeEnum `json:"Mode,omitempty"`
	WebURL             *string   `json:"WebUrl,omitempty"`
}
