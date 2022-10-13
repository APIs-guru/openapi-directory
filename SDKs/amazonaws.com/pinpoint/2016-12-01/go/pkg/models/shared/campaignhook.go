package shared

type CampaignHook struct {
	LambdaFunctionName *string   `json:"LambdaFunctionName"`
	Mode               *ModeEnum `json:"Mode"`
	WebURL             *string   `json:"WebUrl"`
}
