package shared

// AliasConfiguration
// Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
type AliasConfiguration struct {
	AliasArn        *string                    `json:"AliasArn,omitempty"`
	Description     *string                    `json:"Description,omitempty"`
	FunctionVersion *string                    `json:"FunctionVersion,omitempty"`
	Name            *string                    `json:"Name,omitempty"`
	RevisionID      *string                    `json:"RevisionId,omitempty"`
	RoutingConfig   *AliasRoutingConfiguration `json:"RoutingConfig,omitempty"`
}
