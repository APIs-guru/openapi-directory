package shared

type AliasConfiguration struct {
	AliasArn        *string                    `json:"AliasArn"`
	Description     *string                    `json:"Description"`
	FunctionVersion *string                    `json:"FunctionVersion"`
	Name            *string                    `json:"Name"`
	RevisionID      *string                    `json:"RevisionId"`
	RoutingConfig   *AliasRoutingConfiguration `json:"RoutingConfig"`
}
