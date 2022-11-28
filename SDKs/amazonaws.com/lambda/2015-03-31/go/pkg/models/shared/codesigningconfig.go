package shared

// CodeSigningConfig
// Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>.
type CodeSigningConfig struct {
	AllowedPublishers    AllowedPublishers   `json:"AllowedPublishers"`
	CodeSigningConfigArn string              `json:"CodeSigningConfigArn"`
	CodeSigningConfigID  string              `json:"CodeSigningConfigId"`
	CodeSigningPolicies  CodeSigningPolicies `json:"CodeSigningPolicies"`
	Description          *string             `json:"Description,omitempty"`
	LastModified         string              `json:"LastModified"`
}
