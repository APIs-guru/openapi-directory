package shared

type StartCallAnalyticsJobRequest struct {
	CallAnalyticsJobName     string                    `json:"CallAnalyticsJobName"`
	ChannelDefinitions       []ChannelDefinition       `json:"ChannelDefinitions"`
	DataAccessRoleArn        string                    `json:"DataAccessRoleArn"`
	Media                    Media                     `json:"Media"`
	OutputEncryptionKmsKeyID *string                   `json:"OutputEncryptionKMSKeyId"`
	OutputLocation           *string                   `json:"OutputLocation"`
	Settings                 *CallAnalyticsJobSettings `json:"Settings"`
}
