package shared

// ProvisioningParameter
// Information about a parameter used to provision a product.
type ProvisioningParameter struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
