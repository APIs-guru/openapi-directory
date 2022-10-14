package shared

type CreateEnvironmentAccountConnectionInput struct {
	ClientToken         *string `json:"clientToken,omitempty"`
	EnvironmentName     string  `json:"environmentName"`
	ManagementAccountID string  `json:"managementAccountId"`
	RoleArn             string  `json:"roleArn"`
}
