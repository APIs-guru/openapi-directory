package shared

// ProvisioningArtifactParameter
// Information about a parameter used to provision a product.
type ProvisioningArtifactParameter struct {
	DefaultValue         *string               `json:"DefaultValue,omitempty"`
	Description          *string               `json:"Description,omitempty"`
	IsNoEcho             *bool                 `json:"IsNoEcho,omitempty"`
	ParameterConstraints *ParameterConstraints `json:"ParameterConstraints,omitempty"`
	ParameterKey         *string               `json:"ParameterKey,omitempty"`
	ParameterType        *string               `json:"ParameterType,omitempty"`
}
