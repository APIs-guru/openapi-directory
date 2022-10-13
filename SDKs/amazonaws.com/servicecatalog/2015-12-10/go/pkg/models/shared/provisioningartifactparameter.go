package shared

type ProvisioningArtifactParameter struct {
	DefaultValue         *string               `json:"DefaultValue"`
	Description          *string               `json:"Description"`
	IsNoEcho             *bool                 `json:"IsNoEcho"`
	ParameterConstraints *ParameterConstraints `json:"ParameterConstraints"`
	ParameterKey         *string               `json:"ParameterKey"`
	ParameterType        *string               `json:"ParameterType"`
}
