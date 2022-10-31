package shared

type AliasConfiguration struct {
	AliasArn        *string                    `json:"AliasArn,omitempty"`
	Description     *string                    `json:"Description,omitempty"`
	FunctionVersion *string                    `json:"FunctionVersion,omitempty"`
	Name            *string                    `json:"Name,omitempty"`
	RevisionID      *string                    `json:"RevisionId,omitempty"`
	RoutingConfig   *AliasRoutingConfiguration `json:"RoutingConfig,omitempty"`
}
