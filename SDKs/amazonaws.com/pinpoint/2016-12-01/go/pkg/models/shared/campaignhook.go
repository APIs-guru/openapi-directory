package shared

// CampaignHook
// Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
type CampaignHook struct {
	LambdaFunctionName *string   `json:"LambdaFunctionName,omitempty"`
	Mode               *ModeEnum `json:"Mode,omitempty"`
	WebURL             *string   `json:"WebUrl,omitempty"`
}
