package shared

type CodeSigningConfig struct {
	AllowedPublishers    AllowedPublishers   `json:"AllowedPublishers"`
	CodeSigningConfigArn string              `json:"CodeSigningConfigArn"`
	CodeSigningConfigID  string              `json:"CodeSigningConfigId"`
	CodeSigningPolicies  CodeSigningPolicies `json:"CodeSigningPolicies"`
	Description          *string             `json:"Description,omitempty"`
	LastModified         string              `json:"LastModified"`
}
